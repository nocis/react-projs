import React from "react";
const MyReactReduxContext = React.createContext({});

export class MyProvider extends React.Component {
  render() {
    return (
      <MyReactReduxContext.Provider value={this.props.store}>
        {this.props.children}
      </MyReactReduxContext.Provider>
    );
  }
}

//The connect() function connects a React component to a Redux store.
export function connect(mapStateToProps, mapDispatchToProps) {
  return (Subcompo) => {
    return class ConnetWrapper extends React.Component {
      static contextType = MyReactReduxContext;
      constructor(props) {
        super(props);
      }
      componentDidMount() {
        this.store = this.context;
        console.log(this.store);

        this.store.subscribe(() => {
          this.forceUpdate();
        });
        // this is neacessary because we need to start to update ConnetWrapper
      }

      render() {
        this.newprops = mapStateToProps(this.context.getState());
        this.newprops2 = mapDispatchToProps(this.context.dispatch);
        return (
          <Subcompo
            {...this.props}
            {...this.newprops}
            {...this.newprops2}
          ></Subcompo>
        );
        // of course this is props change and it causes Subcompo update and rerender
        // but it will not start untill ConnetWrapper starts its update and return a new jsx obj
      }
    };
  };
}

//const result: any = useSelector(selector: Function, equalityFn?: Function)
//Allows you to extract data from the Redux store state, using a selector function.
//const todo = useSelector((state) => state.todos[props.id])

/*export function useSelector(cb) {
  return cb(state);
}*/

//eturns a reference to the dispatch function from the Redux store
//const dispatch = useDispatch();
/*export function useDispatch() {
  return store.dispatch;
}*/

//
//
//
//
//
//
/*
customize hook's run context always is current func comp!!!!
which means any update to customize hook also cause func compo update!!!!!!!
=>force update

customize hook is a func!!!! it return a setState func as customize hook
*/

//
//
//
//
//
//
//
/*
page switch will trigger unmount!!!!!!

var- function scope func{}

*/
