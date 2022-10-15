import React from 'react';
import AppContainer from './src/navigator'
import GlobalProvider from './src/context/Provider'

const App = () => {
  return (
          <GlobalProvider>
            <AppContainer/>
          </GlobalProvider>
        //   <SafeAreaView style={
        //     {
        //         width: widthScreen, 
        //         height: 'auto',
        //         padding: 10,
        //         // alignItems: 'center',
        //         // justifyContent: 'center',
        //     }
        //   }>
        //     <StatusBar 
        //         barStyle='light-content' 
        //         backgroundColor={colors.orange}
        //     />
                
        // </SafeAreaView>

  )
}

export default App;