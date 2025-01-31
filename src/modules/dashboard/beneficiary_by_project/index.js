import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Pie } from 'react-chartjs-2';

import { ExportToExcel } from '../../global/ExportToExcel';

let _data = [];
let _labels = [];

let pieData = {
	labels: _labels,
	datasets: [
		{
			data: _data,
			pointRadius: 1,
			pointHitRadius: 10,
			backgroundColor: ['#245064', '#80D5AA', '#F49786', '#F7C087', '#2b7ec1', '#fb6340', '#527855'],
			hoverBackgroundColor: ['#245064', '#80D5AA', '#F49786', '#F7C087', '#2b7ec1', '#fb6340', '#527855'],
			hoverOffset: 100
		}
	]
};

export default function Index(props) {
	const { releasedToken, redeemedTokens, data, exportData } = props;

	if (data && data.length) {
		_labels = [];
		_data = [];
		for (let d of data) {
			_labels.push(d.name);
			_data.push(d.count);
		}
		pieData.labels = _labels;
		pieData.datasets[0].data = _data;
	}

	return (
		<div>
			<Card>
				<div style={{ padding: 20 }}>
					<span className="custom-label">Tokens</span>
					<br />
					<div className="flex-container">
						<div className="flex-item">
							<p className="token-counts">{releasedToken}</p>
							<span className="token-label">Total released</span>
						</div>
						<div className="flex-item "></div>
						<div className="flex-item v-border"></div>
						<div className="flex-item">
							<p className="token-counts">{redeemedTokens}</p>
							<p className="token-label">Total redeem</p>
						</div>
					</div>
				</div>
			</Card>
			<Card>
				<CardBody>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<CardTitle>Beneficiaries by project ({data.length})</CardTitle>
						<div>
							{exportData.length ? (
								<ExportToExcel apiData={exportData} fileName="Beneficiaries-by-project-report.xlsx" />
							) : (
								''
							)}
						</div>
					</div>
					<div className="chart-wrapper" style={{ width: '100%', margin: 10, height: 230 }}>
						<Pie
							data={pieData}
							options={{
								maintainAspectRatio: false,
								legend: {
									display: true,
									position: 'bottom',
									labels: {
										fontFamily: 'Be Vietnam',
										fontColor: '#9B9B9B'
									}
								}
							}}
						/>
					</div>
				</CardBody>
			</Card>
		</div>
	);
}
