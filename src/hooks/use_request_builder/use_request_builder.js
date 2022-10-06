import React, { useContext, useState } from "react";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-native";

import {
  CurrentUserContext,
  SnackbarContext,
} from "../../providers";
import { requestBuilder } from "../../utils/request_builder";

import { useDeviceStorage } from "../use_device_storage";
import { useIsMounted } from "../use_is_mounted";

export function useRequestBuilder(requestType, url) {
  const isMounted = useIsMounted();
  const navigate = useNavigate();
  const [storage] = useDeviceStorage();
  const { notify } = useContext(SnackbarContext);

  //const { currentUser } = useContext(CurrentUserContext);
  const [isFetching, setIsFetching] = useState(false);

  // theRequest cannot be dependent on the currentEmployee, because currentEmployee could change at any time.
  // instead set a primitive string, to see if the callback needs to be re memoized.

  // For authorization need add headers to requestBuider
  //  {
  //   headers: {
  //     Accept: `application/${version}`,
  //     Authorization: token,
  //   },
  //   params,
  //  }
  //const token = currentUser?.token;

  const theRequest = React.useCallback(
    async function (params) {
      !!isMounted && setIsFetching(true);
      const res = await requestBuilder(requestType, url,
        { headers: {}, params });
      !!isMounted && setIsFetching(false);
      if (res.status === 401) {
        navigate("/login");
        await storage.removeValue("currentUser");
        return;
      }
      if (res.status === 500) {
        notify("Something went wrong.", "error");
      }

      return res;
    },
    [requestType, url, isMounted, navigate],
  );

  return [isFetching, theRequest];
}

useRequestBuilder.propTypes = {
  requestType: PropTypes.oneOf(["GET", "POST", "PATCH", "DELETE"]),
  url: PropTypes.string.isRequired,
  version: PropTypes.string,
};
