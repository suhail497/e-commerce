import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from "reselect"
import { selectCurentUser } from './redux/user/user.selector';
import CheckOut from "./pages/checkout/checkout.component"
import { selectCollectionsForPreview } from './redux/shop/shop.selector';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    // const {setCurrentUser}= this.props;
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //           if(userAuth){
    //             const userRef = await createUserProfileDocument(userAuth)

    //             userRef.onSnapshot(snapshot =>{
    //               setCurrentUser({
    //                 currentUser:{
    //                   id:snapshot.id,
    //                   ...snapshot.data()
    //                 }
    //               }, () =>  console.log(setCurrentUser)
    //               )

    //             })
    //             // console.log(this.state)
    //           }
    //           setCurrentUser({currentUser:userAuth})
    //                                                         // createUserProfileDocument(userAuth)
    //                                                         // this.setState({currentUser:userAuth})
    //                                                         //  console.log(user)
    // })

    const { setCurrentUser, collectionsArray } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);

    });

    addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }) => ({ title, items })));
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          {/* <Route path='/sign-in-and-signup' component={SignInAndSignUpPage}/> */}
          <Route exact path="/sign-in-and-signup" render={() => this.props.currentUser ?
            (<Redirect to='/' />) : (<SignInAndSignUpPage />)
          } />

          <Route path='/checkout' component={CheckOut} />

          {/* Redirect used for which component to render when the state is changed */}

        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  { setCurrentUser: user => dispatch(setCurrentUser(user)) }
)

// const mapStateToprops = ({ user }) => (
//   {
//     currentUser: user.currentUser
//   }
// )

const mapStateToprops = createStructuredSelector(
  {
    currentUser: selectCurentUser,
    collectionsArray: selectCollectionsForPreview
  }
)

export default connect(mapStateToprops, mapDispatchToProps)(App);


