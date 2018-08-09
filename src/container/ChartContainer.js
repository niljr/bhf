import React from 'react';
import { Bar } from 'react-chartjs-2';

import base from '../base';
import Header from '../components/Header';

var temp = {};
class ChartContainer extends React.Component {
    state = {
        boardingHouses: {},
        temp: {}
    }

    componentDidMount() {
        this.ref = base.syncState('/boardingHouses', {
            context: this,
            state: "boardingHouses"
        });
        this.setState({temp});
    }
    
    
    componentDidUpdate(prevProps, prevState) {
        if (JSON.stringify(prevState.boardingHouses) !== JSON.stringify(this.state.boardingHouses)) {
            let chart = {};

            Object.keys(this.state.boardingHouses).map(data => {
                const district = this.state.boardingHouses[data].district;

                chart[district] = !chart[district] ? 1 : chart[district] + 1;
            });

            this.setState({ temp: chart });
        }
    }

    render() {
        const labels = ["Iloilo", "Lapaz", "Molo", "Villa Arevalo", "City Proper", "Mandurriao", "Lapuz", "Jaro"]
        let district = this.state.temp;
        
        return (
            <div>
                <Header />
                <Bar
                    data={{
                        // labels: labels,
                        // datasets: [{
                            // label: 'Total number of Boarding House per District',
                        //     data: labels.map((x) => boardingHouseStore.filterReport("districtName", 'bhAddress', x)),
                        //     backgroundColor: [
                        //         'rgba(255, 99, 132, 0.2)',
                        //         'rgba(54, 162, 235, 0.2)',
                        //         'rgba(255, 206, 86, 0.2)',
                        //         'rgba(75, 192, 192, 0.2)',
                        //         'rgba(153, 102, 255, 0.2)',
                        //         'rgba(255, 159, 64, 0.2)',
                        //         'rgba(0, 255, 0, 0.2)'
                        //     ],
                        //     borderColor: [
                        //         'rgba(255,99,132,1)',
                        //         'rgba(54, 162, 235, 1)',
                        //         'rgba(255, 206, 86, 1)',
                        //         'rgba(75, 192, 192, 1)',
                        //         'rgba(153, 102, 255, 1)',
                        //         'rgba(255, 159, 64, 1)',
                        //         'rgba(0, 255, 0, 1)'
                        //     ],
                        //     borderWidth: 1
                        // }]
                        labels: labels,
                        datasets: [{
                            label: 'Population',
                                data: [
                                    district.iloilo,
                                    district.lapaz,
                                    district.molo,
                                    district.villa,
                                    district.city,
                                    district.mandurriao, 
                                    district.lapuz, 
                                    district.jaro, 
                                    0
                                ],
                            backgroundColor: [
                                'rgba(255,99,132,0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(255, 206, 86, 0.5)',
                                'rgba(75, 192, 192, 0.5)',
                                'rgba(153, 102, 255, 0.5)',
                                'rgba(255, 159, 64, 0.5)',
                                'rgba(0, 255, 0, 0.5)'
                            ],
                            borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                            ],
                            borderWidth: 1


                        }]
                    }}
                    options={{
                        title: {
                            display: true,
                            text: 'Total Number of Boarding house per Districts',
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
                
            
            </div>
        ) 
    }
}

export default ChartContainer