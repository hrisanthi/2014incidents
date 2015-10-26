$(function () {
    // Age categories
    var categories = ['New Year', 'Martin Luther King', 'Valentine Day','President Day',
    'Easter Sunday', 'Mother Day', 'Memorial Day', 'Father Day', 'Independence Day',
'Labor Day', 'Columbus Day', 'Halloween', 'Veteran Day', 'Thanksgiving', 'Christmas Eve',
'Christmas Day', 'New Year Eve'];
    $(document).ready(function () {
        $('#holiday').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Incidents'
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
                        'Reported: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },

            series: [{
                name: 'Number',
                data: [73, 64, 77, 85, 63, 68, 80, 89, 82, 72, 86, 66, 86, 66, 63, 42,
                    92]

            }],
            exporting: {
                enabled: false
        }
        });
    });

});
