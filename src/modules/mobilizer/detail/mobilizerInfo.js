import React from 'react';
import { Card, CardTitle, Col, Row } from 'reactstrap';
import '../../../assets/css/project.css';
import image from '../../../assets/images/id-icon-1.png';
import { History } from '../../../utils/History';
import moment from 'moment'
const IPFS_GATEWAY = process.env.REACT_APP_IPFS_GATEWAY;

export default function MobilizerInfo(props) {
	const { information } = props;
	const { id } = props.information;
	const handleEditClick = () => History.push(`/edit-mobilizer/${id}`);
	return (
		<div>
			<Card>
				<div className="stat-card-body" style={{ minHeight: 120 }}>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<CardTitle className="title" style={{ flexBasis: '90%' }}>
							More Information
						</CardTitle>
						<div style={{ flexBasis: '10%' }}>
							<button
								type="button"
								className="btn waves-effect waves-light btn-info"
								onClick={handleEditClick}
								style={{ borderRadius: '8px' }}
							>
								Edit
							</button>
						</div>
					</div>
					<Row>
						<Col md="4" sm="12">
							<div className="card-data">
								<p className="card-font-medium">{information.email || '-'}</p>
								<div className="sub-title">Email</div>
							</div>
							<div className="card-data">
								<p className="card-font-medium">{information.bank_name || '-'}</p>
								<div className="sub-title">Government ID</div>
							</div>
							<div className="card-data">
								<p className="card-font-medium">{information.wallet_address || '-'}</p>
								<div className="sub-title">Wallet address</div>
							</div>
						</Col>
						<Col md="4" sm="12">
							<div className="card-data">
								<p className="card-font-medium">{information.phone || '-'}</p>
								<div className="sub-title">Phone number</div>
							</div>
							<div className="card-data">
								<p className="card-font-medium">{information.address || '-'}</p>
								<div className="sub-title">Address</div>
							</div>
							<div className="card-data">
								<p className="card-font-medium">{information.organization || '-'}</p>
								<div className="sub-title">Organization</div>
							</div>
						</Col>
						<Col md="4" sm="12">
							<img
								src={
									information.govt_id_image && information.govt_id_image
										? `${IPFS_GATEWAY}/ipfs/${information.govt_id_image}`
										: image
								}
								alt="goverment_id"
								width="90%"
								height="130px"
								className="card-data"
							/>
										<div className="card-data ">
								<p className="card-font-medium">{ moment(information.created_at).format('MMM Do YYYY, hh:mm A') || '-'}</p>
								<div className="sub-title">Registration Date</div>
							</div>
						</Col>
					</Row>
				</div>
			</Card>
		</div>
	);
}
