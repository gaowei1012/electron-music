import * as React from 'react' 
import { connect } from 'react-redux'
import actions from '../../redux/actions'
class BookList extends React.PureComponent {
state={
}
componentDidMount(){}
render() {return (<></>);}
}
const mapStateToProps = (state) => ({
  : state.,
})
const mapDispatchToProps = (dispatch) => ({
: (url) => dispatch(actions.(url))
})
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
