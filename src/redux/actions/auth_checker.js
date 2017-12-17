// maybe use 
const authChecker = (Component) => {
    return class extends React.Component {
      state = {
        show: false;
      }
  
      componentWillReceiveProps(nextProps) {
        if (nextProps.children !== this.props.children) {
          this.checkAuth();
        }
      }
  
      componentDidMount() {
        this.checkAuth();
      }
  
      checkAuth() {
        Api.checkAuth()
        .then(result => {
          if (result.success) {
            this.setState({ show: true });
          } else {
            // logout since token expired
            API.logout();
          }
        });
      }
  
      render() {
        return this.state.show && <Component {...this.props} />
      }
    }
  }
  
  export default authChecker(Main);



  var isExpiredToken = false;
  
  var dateNow = new Date();
  
  if(decodedToken.exp < dateNow.getTime())
  
  {
         isExpiredToken = true;
  }