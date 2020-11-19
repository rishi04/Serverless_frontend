import React, {Component} from 'react';
import{Table, Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsDown, faThumbsUp , faImage, faMoneyCheckAlt, } from '@fortawesome/free-solid-svg-icons';


class App extends Component{
    // Mock state for frontend  
    state = {
        isLoading: false,
        invoices : [
            {
                "id" : "100",
                "vendor" : "hank",
                "invoice" :"1123",
                "amount" : "$18.00",
                "date"  : "11/15/2019"
            },
            {
                "id" : "200",
                "vendor" : "hank",
                "invoice" :"1123",
                "amount" : "$18.00",
                "date"  : "11/15/2019"
            },
            {
                "id" : "1300",
                "vendor" : "hank",
                "invoice" :"1123",
                "amount" : "$18.00",
                "date"  : "11/15/2019"
            }
        ]

    }
    // set state to below when adding the API Endpoint 
    /*state = {
        isLoading : false,
        invoices : [],        
    }*/

    remove(id){
       let updatedInvoices = [...this.state.invoices].filter(i => i.id !== id) 
       this.setState({invoices : updatedInvoices});
    }
    // Replace with endpoint here 
    async componentDidMount(){
        const response = await fetch(' Add your Api endpoint here.');
        const body = await response.json();
        this.setState({invoices : body, isLoading : false})

    }

    render(){
        const isLoading = this.state.isLoading;
        const allinvoices = this.state.invoices;

        if(isLoading){return(<div> Loading... </div>);}
        
        
         let invoices =
          allinvoices.map( invoice => 
            <tr key={invoice.id}>
                <td>{invoice.vendor}</td>
                <td>{invoice.amount}</td>
                <td>{invoice.invoice}</td>
                <td>{invoice.date}</td>
                <td><Button className="btn btn-lg btn-success" onClick={() => this.remove(invoice.id)}> <FontAwesomeIcon icon={faThumbsUp}/> Ok </Button></td>
                <td><Button className="btn btn-lg btn-danger" onClick={() => this.remove(invoice.id)}><FontAwesomeIcon icon={faThumbsDown}/>  Not Ok </Button></td>
                <td><Button className="btn btn-lg btn-info" onClick={() => this.remove(invoice.id)}><FontAwesomeIcon icon={faMoneyCheckAlt}/>  50% </Button></td>
                <td><Button className="btn btn-lg btn-warning" onClick={() => this.remove(invoice.id)}><FontAwesomeIcon icon={faThumbsDown}/>  ?? </Button></td>
                <td><Button className="btn btn-lg btn-info" onClick={() => this.remove(invoice.id)}><FontAwesomeIcon icon={faImage}/>  Image </Button></td>
            </tr>
    )
        
        return(
            <div className="container border border-secondary rouded center">
                <div className="row">
                    <div className="col-12">
                        <h4>Pending Invoices - The Test</h4>
                    </div>


                </div>
                <div className="row">
                    <div className=".col-xs-12 cernter text-center">
                        <Table dark responsive striped bordered hover>
                            <thead>
                                <th>vendor</th>
                                <th>invoice #</th>
                                <th>amount</th>
                                <th>date</th>
                                <th colSpan="4">action</th>
                                <th>image</th>
                            </thead>
                            <tbody>
                                {this.state.invoices.length === 0 ? <td colSpan="9">All caught up</td> : invoices}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
            );
    }
}

export default App;