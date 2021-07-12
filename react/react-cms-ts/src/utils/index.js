import { useCallback, useEffect, useRef, useState } from "react";

export const isFalsy = (value) => (!value ? value !== 0 : false);

export const cleanOBJ = (object) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    // only Object.keys(object),
    // object.keys() not a function
    const value = object[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });

  return result;
};

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

export const debounce = (func, delay) => {
  let tid;
  return (args) => {
    clearTimeout(tid);
    tid = setTimeout(() => {
      tid = null;
      func(args);
    }, delay);
  };
};

export const useDebounce = (callback, deps) => {
  let [u, fu] = useState(false);
  let depsRef = useRef(deps);
  let changeDeps = useCallback(
    debounce((args) => {
      depsRef.current = args;
      fu(!u);
    }, 500),
    depsRef.current
  );

  if (
    deps.some((dep, idx) => {
      return dep !== depsRef.current[idx];
    })
  ) {
    //console.log("depschange");
    changeDeps(deps);
  }

  //console.log("depsRef", depsRef.current);
  // 1st : because depschange happend before fu(!u)
  // 2nd : because fu=>rerender, useDebounce executed again, and callback will be invoked because depsRef change
  // 3rd : because callback=> setState hook, useDebounce executed again. and callback will **not** be invoked because depsRef **does not** change
  useEffect(callback, depsRef.current);
};

export const useDebounceSimple = (callback, deps) => {
  useEffect(() => {
    // every cb is a new func with different timeout address!!!!
    // return cleanup use previous cb's closure
    // thus, clearTimeout capture a previous timeout's address from previous closure!!!!
    // and this clearTimeout from previous closure is invoked before next cb!!!!

    const timeout = setTimeout(() => callback(), 500);
    return () => clearTimeout(timeout);
  }, deps);
};
// only two pass, less than before!!!!!!
