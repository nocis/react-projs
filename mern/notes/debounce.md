
export const debounce = (func, delay) => {
  let tid;
  return () => {
    clearTimeout(tid);
    tid = setTimeout(() => {
      clearTimeout(tid); // even clean timer here the code below still can be executed because the func call is issued!!!
      console.log(11122); // 11122
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



!!!!!!!a more straight way
export const useDebounce = <V> (value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // clean previous timer before issuing this one by using useEffect return!!!!
    // after last value change, this setState issues final change for value and use it later to apply real deps difference to invoke useeffect 

    const timeout = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
}


!!!!!!extreme simple version!!!
export const useDebounceSimple = (callback, deps) => {
  useEffect(() => {
    const timeout = setTimeout(() => callback(), 500);
    return () => clearTimeout(timeout);
  }, deps);
};
