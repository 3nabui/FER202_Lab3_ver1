import React, { Component } from 'react'
import { Orchids } from '../components/Shared/ListOfOrchids'
import OrchidsPresentation from './OrchidsPresentation';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
            orchids: Orchids
        };
    }
    render() {
      return <OrchidsPresentation orchids={this.state.orchids}/>
    }
  }
  export default Main
  