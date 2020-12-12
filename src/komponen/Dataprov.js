// import react dan tabel
import React from 'react';
import MaterialTable from 'material-table';

// class based componen
class Dataprov extends React.Component {
    constructor(props) {
        super(props);
        this.tableRef = React.createRef();
    }

    state = {
        loading:false,
        stats: [],
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
        .then(response => response.json())
        .then(res => {
        this.setState({ stats: res.data, loading: false }, () => console.log(res))
        })
        .catch(error => {
        console.log(error)
        })
    }

    render() {
        return (
             <React.Fragment> 
                <MaterialTable style={{marginLeft:'10px', marginRight:'10px', backgroundColor:'#00b3b3'}}
                     title="Data Kasus Covid-19 Negara"
 
                     columns={[
                        { title: 'Provinsi', field :'provinsi'},
                        { title: 'Total Positif', field :'kasusPosi'},
                        { title: 'Total Sembuh', field :'kasusSemb' },
                        { title: 'Total Meninggal',field :'kasusMeni' },
                     ]}

                    data={this.state.stats}

                    actions={[
                        {
                            icon: 'refresh',
                            tooltip: 'Refresh',
                            isFreeAction: true,
                            onClick: () => this.tableRef.current && this.tableRef.current.onQueryChange(),
                            },
                        ]}
                    options={{
                        headerStyle: {
                        backgroundColor: '#00cccc',
                        color: 'white'
                        },
                        rowStyle: {
                            backgroundColor: '#00e6e6',
                            "&:hover": { backgroundColor: "#009999"}
                        }
                        
                    }}
                />
             </React.Fragment>
              
                 
                     
              
            
             
             );
     }
   
}

export default Dataprov;