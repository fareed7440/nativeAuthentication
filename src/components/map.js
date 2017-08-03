import React,{Component} from 'react'
import { Container, Header, Content, H1, H2, H3, Text } from 'native-base';

class Maps extends Component{
constructor(props){
    super(props);
}

    render(){
        return(
   <Container>
        <Content>
          <H1>Header One</H1>
           <Text>Default</Text>
        </Content>
      </Container>
        )
    }
}

export default Maps;