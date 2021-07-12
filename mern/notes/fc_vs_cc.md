1. totally different way to update state!!!!!

function ProjectList1() {
  let [a, sa] = useState({
    q: 1,
    w: 2,
  });
  console.log(a); // only {q:3}
  return <button onClick={() => sa({ q: 3 })}>c</button>;
}

class ProjectList2 extends Component {
  constructor(p) {
    super(p);
    this.state = { q: 1, w: 2 };
  }
  render() {
    console.log(this.state);// both exist {q:3,w:2}
    return <button onClick={() => this.setState({ q: 3 })}>c</button>;
  }
}

the errors this causes:
1. controlled => uncontrolled (missing keys)