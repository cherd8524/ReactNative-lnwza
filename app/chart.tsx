import { Dimensions, ScrollView, Text } from 'react-native';
import { LineChart, PieChart, ProgressChart } from 'react-native-chart-kit';

export default function Chart() {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Rainy Days"] // optional
    };
    const chartConfig = {
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        }
    };
    const screenWidth = Dimensions.get("window").width;

    const pieData = [
        {
            name: "January",
            population: 20,
            color: "#FF6384",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "February",
            population: 45,
            color: "#36A2EB",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "March",
            population: 28,
            color: "#FFCE56",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "April",
            population: 80,
            color: "#4BC0C0",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "May",
            population: 99,
            color: "#9966FF",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "June",
            population: 43,
            color: "#FF9F40",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        }
    ];

    // Normalize data for ProgressChart (0-1 range)
    const chartData = data.datasets[0].data;
    const maxValue = Math.max(...chartData);
    const normalizedData = chartData.map(value => value / maxValue);
    const progressColors = pieData.map(item => item.color);

    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 10 }}>
            <Text style={{ fontSize: 20 }}>
                Bezier Line Chart
            </Text>
            <LineChart
                data={data}
                width={screenWidth - 20} // from react-native
                height={220}
                chartConfig={chartConfig}
                bezier={true}
                style={{
                    marginVertical: 10,
                    borderRadius: 15
                }}
            />
            <Text style={{ fontSize: 20, marginTop: 20 }}>
                Pie Chart
            </Text>
            <PieChart
                data={pieData}
                width={screenWidth - 20}
                height={220}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                style={{
                    marginVertical: 10,
                    borderRadius: 15
                }}
            />
            <Text style={{ fontSize: 20, marginTop: 20 }}>
                Progress Chart
            </Text>
            <ProgressChart
                data={{
                    data: normalizedData,
                    colors: progressColors
                }}
                width={screenWidth - 20}
                height={220}
                chartConfig={chartConfig}
                style={{
                    marginVertical: 10,
                    borderRadius: 15
                }}
            />
        </ScrollView>
    );
}
