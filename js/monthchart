$(function () {
    // Age categories
    var categories = ['Sun','Mon','Tues', 'Weds', 'Thurs', 'Fri', 'Sat'];
    $(document).ready(function () {
        $('#day').highcharts({
            chart: {
                type: 'line'
            },
            title: {
                text: 'Incidents by day'
            },

            xAxis: [{
                categories: categories,
            }],
            yAxis: {
                min: 0,
                title: {
                    text: null
                },
                labels: {
                    overflow: 'justify'
                    }
            },

            plotOptions: {
            bar: {
                dataLabels: {
                    enabled: false
                }
            }
        },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + ' ' + this.point.category + '</b><br/>' +
                        'Spending: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },

            series: [{
                name: 'Number',
                data: [3548, 4727, 4247, 4285, 4257, 4392, 3891 ]

            }],
            exporting: {
                enabled: false
        }
        });
    });

});
