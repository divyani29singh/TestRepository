import fetch from "cross-fetch";



var ImagePicker = require('react-native-image-picker');
var options = {
  title: 'Select Photo',

storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

  componentDidMount()
   {
         fetch('http://demo2x.magentomobileshop.com/restapi/customer/getuserinfo', {
            method: 'GET',
            headers: {
                token: "xF09bFBni8lh150p9X2xcVmZo",
                viewId: "1",
                storeId: "1",
                currency: "USD",
                "Content-Type": "application/x-www-form-urlencoded"
              },
            body: null,
            })
            .then((response) => response.json())
                .then(responseJson => {
                    this.setState({
                        isLoading: false,
                        data: responseJson.data,
                      })
                  //alert("success "+JSON.stringify(responseJson));
                  return responseJson;
                  })
                  .catch((error) => {
                    alert(" error  "+JSON.stringify(error));
                  console.error(error);
              });
    }
    
    // componentDidMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    //   }
    
    //   componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    //   }
    
    //    handleBackPress = () => {
    //      this.props.navigation.goBack(null);
    //   }
    show()
    {
      
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            }
            else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            }
            else {
              let source = { uri: response.uri };
          
              this.setState({
                avatarSource: source
              });
            }
          });
    };

     Logout()
     {
           fetch('http://demo2x.magentomobileshop.com/restapi/customer/logout', {
                              method: 'GET',
                              headers: {
                                  token: "xF09bFBni8lh150p9X2xcVmZo",
                                  viewId: "1",
                                  storeId: "1",
                                  currency: "USD",
                                  "Content-Type": "application/x-www-form-urlencoded"
                                },
                              body: null,
                              })
                              .then((response) => response.json())
                              .then((responseJson) => {
                                {this.props.navigation.navigate('LoginPage',)}
                                    alert("success "+JSON.stringify(responseJson));
                                    return responseJson;
                                   })
                              .catch((error) => {
                                    alert(" error  "+JSON.stringify(error));
                                    console.error(error);
                                });
                            }
    
  
     
      
  


