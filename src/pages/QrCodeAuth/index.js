import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import '../../styles/qrCode.css';

import hotellogo from '../../assets/hotellogo.png';

function QrCodeAuth() {
	let history = useHistory();
	const [result, setResult] = useState("Aponte a câmera para o QR CODE");

	const handleScan = code => {
		if (code) {
			api.get(`/api/order/info/${code}`).then(response => {
				console.log(response.data);
			//	setResult(response);
				history.push({ pathname: '/home', state: response.data });
			});
		}
	}

	const handleError = err => {
		console.log("ERROR:", err);
	}

	return (
		<div id="qrCode">
			<p style={{ fontSize: 28, paddingTop: '30px' }}> Ler QR Code</p>
			<div className="qrContent">
				<div className="hotelContent">
					<img src={hotellogo} alt="Hotel" />
					<p style={{ color: '#F4EDE8', fontSize: '20px', fontSize: '5vw' }}>Hotel Fradíssimo</p>
				</div>
				<QrReader
					delay={300}
					onError={handleError}
					onScan={handleScan}
					style={{ width: '80%', paddingTop: '20px', maxWidth: '300px' }}
				/>
				<p style={{ borderRadius:'15px', position: 'static', background: '#3E3B47', margin:'10%', padding: '10%', color: '#F4EDE8', display: 'flex', alignItems: 'center', justifyContent: "center" }}>{result}</p>
			</div>
		</div>
	);
}

export default QrCodeAuth;