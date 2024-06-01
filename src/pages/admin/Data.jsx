import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { NavbarAdmin } from "../../components/NavbarAdmin";

export const Data = () => {

    const URL = import.meta.env.VITE_BACKEND_URL;
    const [prodByCategory, setProdByCategory] = useState([]);
    const [categories, setCategories] = useState([]);
    const [chartData, setChartData] = useState({ series: [], labels: [] });

    useEffect(() => {
        const fetchProductsByCategory = async () => {
            try {
                const response = await axios.get(`${URL}/api/products/by-category`);
                const data = response.data;
                setProdByCategory(data);
            } catch (error) {
                console.error("Error al obtener productos por categoría:", error);
            }
        };

        fetchProductsByCategory();
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await axios.get(`${URL}/api/categories`);
                setCategories(response.data);
            } catch (error) {
                console.error("Error al obtener categorías:", error);
            }
        }
        getCategories();
    }, []);

    useEffect(() => {
        if (prodByCategory.length && categories.length) {
            const series = [];
            const labels = [];

            prodByCategory.forEach((prod) => {
                const category = categories.find(cat => cat.id === prod.categoryId);
                if (category) {
                    series.push(prod._count.name);
                    labels.push(category.name);
                }
            });

            setChartData({ series, labels });
        }
    }, [prodByCategory, categories]);

    return (
        <div>
            <NavbarAdmin />
            <div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                        backgroundColor: "white",
                    }}
                >
                    <div className="">
                        <Chart
                            series={chartData.series}
                            options={{
                                title: {
                                    text: "Cantidad de productos por categoría",
                                    align: "center",
                                    style: {
                                        fontSize: 14,
                                        color: "#333",
                                    },
                                },
                                breakpoints: [
                                    {
                                        options: {
                                            chart: {
                                                width: 300,
                                            },
                                            legend: {
                                                position: "bottom",
                                            },
                                        },
                                        breakpoint: 480,
                                    },
                                ],
                                chart: {
                                    type: "pie",
                                    toolbar: {
                                        show: true,
                                    },
                                },
                                plotOptions: {
                                    pie: {
                                        donut: {
                                            labels: {
                                                show: false,
                                            },
                                        },
                                    },
                                },
                                dataLabels: {
                                    enabled: true,
                                    formatter: (val, opts) => {
                                        return opts.w.config.series[opts.seriesIndex];
                                    },
                                },
                                legend: {
                                    position: "bottom",
                                    fontSize: "14px",
                                    fontFamily: "Helvetica, Arial",
                                    fontWeight: 400,
                                    labels: {
                                        colors: "#333",
                                    },
                                },
                                labels: chartData.labels,
                            }}
                            type="pie"
                            width={380}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
