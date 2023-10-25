import axios from "axios";
import apiClient from "../../api/apiClient";

export async function makePayment(data) {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await apiClient.post("/subscription/payment",
      data,
  
    );

    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
}
