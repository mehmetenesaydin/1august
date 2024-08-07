/* eslint-disable @typescript-eslint/no-explicit-any */
// src/api.ts
import axios from 'axios';

// API URL'inizi burada tanımlayın
const API_URL = 'https://localhost:7005'; // API'nin temel URL'i

export const getContractPdf = async (contractData: any): Promise<Uint8Array> => {
    try {
        const response = await axios.post(`${API_URL}/contract/OnlinePlatformServiceAgreement`, contractData, {
            responseType: 'arraybuffer' // PDF dosyasını almak için gerekli
        });
        return new Uint8Array(response.data);
    } catch (error) {
        console.error("Error fetching contract PDF", error);
        throw error;
    }
};
