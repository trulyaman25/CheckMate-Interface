import React, { useState, useEffect } from "react";
import { useHref, useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import axios from "axios";
import { logoutRoute } from "../utils/APIRoutes";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

export default function Contacts({ contacts, changeChat }) {
	const [currentUserName, setCurrentUserName] = useState(undefined);
	const [currentUserImage, setCurrentUserImage] = useState(undefined);
	const [currentSelected, setCurrentSelected] = useState(undefined);

	useEffect(async () => {
		const data = await JSON.parse(
			localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
		);
		setCurrentUserName(data.username);
		setCurrentUserImage(data.avatarImage);
	}, []);

	const changeCurrentChat = (index, contact) => {
		setCurrentSelected(index);
		changeChat(contact);
	};

	const navigate = useNavigate();
	const handleClick = async () => {
		const id = await JSON.parse(
			localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
		)._id;
		
		const data = await axios.get(`${logoutRoute}/${id}`);

		if (data.status === 200) {
			localStorage.clear();
			navigate("/login");
		}
	};

  	return (
		<>
			{currentUserImage && currentUserImage && (
				<Container>
					<div className="brand">
						<h1>Contact Section</h1>
					</div>

					<div className="contacts">
						{contacts.map((contact, index) => {
							return (
								<div key={contact._id} className={`contact ${ index === currentSelected ? "selected" : "" }`} onClick={() => changeCurrentChat(index, contact)}>
									{/* <div className="avatar">
										<img src={`data:image/svg+xml;base64,${contact.avatarImage}`} alt="" />
									</div> */}
									
									<div className="username">
										<h3>{contact.username}</h3>
									</div>
								</div>
							);
						})}
					</div>

					<div className="current-user">
						<div className="avatar">
							<a href="/setAvatar">
								<img src={`data:image/svg+xml;base64,${currentUserImage}`} alt="avatar" />
							</a>
						</div>

						<div className="username">
							<h2>{currentUserName}</h2>
						</div>

						<Button onClick={handleClick}>
							<BiPowerOff />
						</Button>
					</div>
				</Container>
			)}
		</>
  	);
}

const Container = styled.div`
	display: grid;
	grid-template-rows: 10% 75% 15%;
	overflow: hidden;
	background-color: #080420;

	.brand {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;

		img {
		height: 2rem;
		}

		h1 {
		color: white;
		text-transform: uppercase;
		}
	}

	.contacts {
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: auto;

		&::-webkit-scrollbar {
			width: 0.2rem;

			&-thumb {
				background-color: #ffffff39;
				width: 0.1rem;
				border-radius: 1rem;
			}
		}

		.contact {
			min-height: 5rem;
			cursor: pointer;
			width: 100%;
			margin: 0px 0px 5px 0px;
			height: 110px;
			padding: 3rem;
			display: flex;
			gap: 1rem;
			align-items: center;
			transition: all 0.1s ease-in-out;
			
			&:hover {
				background-color: #ffffff50;
			}
			
			.avatar {
				img {
					height: 3rem;
				}
			}
			
			.username {
				h3 {
					color: white;
				}
			}
		}
		
		.selected {
			background-color: #9a86f3;
		}
	}

	.current-user {
		background-color: #0d0d30;
		padding: 35px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;

		.avatar {
			img {
				height: 4rem;
				max-inline-size: 100%;
			}
		}
		
		.username {
			h2 {
				color: white;
			}
		}
	
		@media screen and (min-width: 720px) and (max-width: 1080px) {
			gap: 0.5rem;
			.username {
				h2 {
					font-size: 1rem;
				}
			}
		}
	}
`;

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;
	border-radius: 0.5rem;
	background-color: #9a86f3;
	border: none;
	cursor: pointer;

	svg {
		font-size: 1.3rem;
		color: #ebe7ff;
	}
`;