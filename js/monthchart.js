$(function () {
    // Age categories
    var categories = ['Jan','Feb','March', 'April', 'May', 'Jun', 'July', "Aug", "Sept", "Oct", "Nov", "Dec"];
    $(document).ready(function () {
        $('#month').highcharts({
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
                name: '2014',
                data: [2312, 2073, 2433, 2550, 2618, 2549, 2611, 2467, 2459, 2561, 2327, 2412]

            }],
            exporting: {
                enabled: false
        }
        });
    });

});
