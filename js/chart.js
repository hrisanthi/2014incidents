$(function () {
    // Age categories
    var categories = ['Additional Offenses', 'Aggressive Assult', 'All Other', 'Arson',
            'Assault', 'Burglary', 'Call service', 'Counterfeit', 'Criminal homicide',
            'Disorderly conduct', 'Drug equipment', 'Drug law', 'Drugs', "DWI", "Embezzlment", "Forgery",
        "found property", 'Fraud', 'Larceny', "Liquor Law", "Lost property", "miscellaneous", "Motor theft", "Offense against family", 'other',
    "physical assult", 'possession', "prostitution", "rape", "Resist, Delay, Obstruct", "robbery", "Sex offense", "shoot",
"simple assult all other", "stolen property", "traffic", "Vandalism", "weapon",];
    $(document).ready(function () {
        $('#container').highcharts({
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
                        'Spending: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },

            series: [{
                name: 'Number',
                data: [890, 390, 2121, 51, 2541, 2624, 1271, 162, 16, 128, 326, 459, 359, 587, 100, 126,
                    290, 2076, 7773, 66, 328, 70, 704, 238, 38, 18, 13, 26, 77, 297, 508, 223, 77, 120,
                190, 1167, 2510, 312]

            }],
            exporting: {
                enabled: false
        }
        });
    });

});
