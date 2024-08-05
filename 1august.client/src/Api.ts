// src/api.ts
import axios from 'axios';

// Tam API URL'inizi burada tanýmlayýn
const API_URL = 'http://localhost:5000/api'; // API'nin tam URL'i

export const getContractPdf = async (contractData: any): Promise<Uint8Array> => {
    try {
        const response = await axios.post(`${API_URL}/contract/OnlinePlatformServiceAgreement`, contractData, {
            responseType: 'arraybuffer' // PDF dosyasýný almak için gerekli
        });
        return new Uint8Array(response.data);
    } catch (error) {
        console.error("Error fetching contract PDF", error);
        throw error;
    }
};