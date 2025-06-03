import { useState, useRef, useCallback, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const useRecaptcha = () => {
  const [capchaToken, setCapchaToken] = useState("");
  const recaptchaRef = useRef(null);

  const handleRecaptcha = useCallback((token) => {
    // console.log("tokenHandle - ", token);
    setCapchaToken(token || "");
  }, []);

  useEffect(() => {
    const refreshCaptcha = () => {
      if (recaptchaRef.current && capchaToken) {
        recaptchaRef.current.reset();
        setCapchaToken("");
      }
    };

    let tokenRefreshTimeout = null;

    if (capchaToken) {
      tokenRefreshTimeout = setTimeout(refreshCaptcha, 110000); // 110 seconds
    }

    return () => {
      if (tokenRefreshTimeout) {
        clearTimeout(tokenRefreshTimeout);
      }
    };
  }, [capchaToken]);

  return { capchaToken, setCapchaToken, recaptchaRef, handleRecaptcha };
};

export default useRecaptcha;
