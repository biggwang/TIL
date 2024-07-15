import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Input, Button, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="80px 0 80px 0" position="relative" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/blurred-gradient-colorful-background.jpg?v=2023-04-27T14:13:16.718Z) 50% 50% /cover repeat scroll padding-box" quarkly-title="Form-4">
			<Override slot="SectionContent" max-width="1220px" />
			<Box
				z-index="1"
				left="0px"
				top="0px"
				right="auto"
				bottom="auto"
				position="static"
				grid-template-columns="repeat(2, 1fr)"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					justify-content="center"
					align-items="center"
				>
					<Text
						lg-padding="0px 0px 0px 0px"
						sm-font="normal 700 36px/1.2 --fontFamily-sans"
						margin="0px 0px 18px 0px"
						font="normal 600 42px/1.2 --fontFamily-sans"
						color="--darkL1"
						text-align="center"
						padding="0px 0 0px 0px"
						lg-width="100%"
						lg-margin="0px 0px 25px 0px"
					>
						Customer Support Center
					</Text>
					<Text
						margin="0px 0 50px 0px"
						font="normal 300 16px/1.5 --fontFamily-sansHelvetica"
						lg-margin="0px 0 50px 0px"
						text-align="center"
						display="flex"
						width="600px"
						sm-width="auto"
						md-width="100%"
					>
						Our highly trained support staff are available 24/7 to answer any questions or concerns you may have, and we work tirelessly to resolve any issues as quickly as possible.
					</Text>
				</Box>
				<Box
					position="relative"
					z-index="1"
					display="flex"
					lg-flex-direction="column"
					flex-direction="column"
					align-items="center"
				>
					<Components.QuarklycommunityKitNetlifyForm lg-margin="0px 0px 35px 0px" sm-margin="0px 0px 25px 0px" sm-width="100%">
						<Box display="flex" lg-flex-wrap="wrap" margin="0px 0px 15px 0px" flex-direction="column">
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								margin="0px 0px 20px 0px"
								sm-flex-direction="column"
								sm-width="100%"
							>
								<Box min-width="10px" min-height="10px" margin="0px 15px 0px 0px" sm-margin="0px 0 15px 0px">
									<Text margin="0px 0px 8px 0px" font="normal 400 16px/1.5 --fontFamily-sans">
										First Name
									</Text>
									<Input
										margin="0px 10px 0px 0px"
										padding="12px 16px 12px 16px"
										width="100%"
										font="--lead"
										md-max-width="none"
										border-radius="8px"
										name="First Name"
										type="text"
										required
										md-margin="0px 0 16px 0px"
										background="rgba(255, 255, 255, 0.1)"
										border-color="--color-lightD2"
									/>
								</Box>
								<Box min-width="10px" min-height="10px">
									<Text margin="0px 0px 8px 0px" font="normal 400 16px/1.5 --fontFamily-sans">
										Last Name
									</Text>
									<Input
										margin="0px 0 0px 0px"
										padding="12px 16px 12px 16px"
										width="100%"
										font="--lead"
										md-max-width="none"
										border-radius="8px"
										name="Last Name"
										type="text"
										required
										md-margin="0px 0 16px 0px"
										background="rgba(255, 255, 255, 0.1)"
										border-color="--color-lightD2"
									/>
								</Box>
							</Box>
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								margin="0px 0px 0 0px"
								sm-flex-direction="column"
								flex-direction="column"
								sm-width="100%"
							>
								<Box
									min-width="10px"
									min-height="10px"
									margin="0px 15px 20px 0px"
									sm-margin="0px 0 15px 0px"
									width="100%"
								>
									<Text margin="0px 0px 8px 0px" font="normal 400 16px/1.5 --fontFamily-sans">
										Company
									</Text>
									<Input
										margin="0px 10px 0px 0px"
										padding="12px 16px 12px 16px"
										width="100%"
										font="--lead"
										md-max-width="none"
										border-radius="8px"
										name="Company"
										type="text"
										required
										md-margin="0px 0 16px 0px"
										background="rgba(255, 255, 255, 0.1)"
										border-color="--color-lightD2"
									/>
								</Box>
								<Box min-width="10px" min-height="10px" margin="0px 0px 20px 0px" width="100%">
									<Text margin="0px 0px 8px 0px" font="normal 400 16px/1.5 --fontFamily-sans">
										E-mail
									</Text>
									<Input
										margin="0px 0 0px 0px"
										padding="12px 16px 12px 16px"
										width="100%"
										font="--lead"
										md-max-width="none"
										border-radius="8px"
										name="E-mail"
										type="email"
										required
										md-margin="0px 0 16px 0px"
										background="rgba(255, 255, 255, 0.1)"
										border-color="--color-lightD2"
									/>
								</Box>
								<Box min-width="10px" min-height="10px" margin="0px 0px 20px 0px" width="100%">
									<Text margin="0px 0px 8px 0px" font="normal 400 16px/1.5 --fontFamily-sans">
										Phone number
									</Text>
									<Input
										margin="0px 0 0px 0px"
										padding="12px 16px 12px 16px"
										width="100%"
										font="--lead"
										md-max-width="none"
										border-radius="8px"
										name="Phone number"
										type="tel"
										required
										md-margin="0px 0 16px 0px"
										background="rgba(255, 255, 255, 0.1)"
										border-color="--color-lightD2"
									/>
								</Box>
							</Box>
							<Text margin="0px 0px 8px 0px" font="normal 400 16px/1.5 --fontFamily-sans">
								Message
							</Text>
							<Input
								margin="0px 10px 30px 0px"
								padding="12px 16px 52px 16px"
								width="100%"
								font="--lead"
								md-max-width="none"
								border-radius="8px"
								name="Message"
								type="text"
								required
								background="rgba(255, 255, 255, 0.1)"
								border-color="--color-lightD2"
							/>
							<Button
								padding="11px 24px 11px 24px"
								font="normal 400 20px/1.5 --fontFamily-sans"
								sm-width="100%"
								focus-box-shadow="none"
								color="--light"
								background="#561dc6"
								border-radius="8px"
								hover-background="--color-darkL1"
								hover-color="--light"
								hover-transition="background-color 0.5s ease 0s"
								transition="background-color 0.1s ease 0s"
								margin="0px 0px 15px 0px"
							>
								Get App
							</Button>
							<Box min-width="10px" min-height="10px" display="flex" sm-flex-direction="column">
								<Text margin="0px 5px 0px 0px" font="normal 400 18px/1.5 --fontFamily-sansHelvetica">
									We care about your data. Read our
								</Text>
								<Link href="#" color="#561dc6" font="normal 400 18px/1.5 --fontFamily-sansHelvetica">
									privacy police
								</Link>
							</Box>
						</Box>
					</Components.QuarklycommunityKitNetlifyForm>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"66952c4ff0cb1d0025f7240b"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});