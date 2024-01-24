import html2canvas from "html2canvas";
import { useRef } from "react";
import { Container, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react";
import bg1 from '../images/background1.png';
import bg2 from '../images/background2.png';
import bg3 from '../images/background3.png';
import bg4 from '../images/background4.png';
import bg5 from '../images/background5.png';
import bg6 from '../images/background6.png';
import bg7 from '../images/background7.png';
import bg8 from '../images/background8.png';
import bg9 from '../images/background9.png';
import bg10 from '../images/background10.png';
import bg11 from '../images/background11.png';
import bg12 from '../images/background12.png';
import bg13 from '../images/background13.png';
import bg14 from '../images/background14.png';
import bg15 from '../images/background15.png';
import bg16 from '../images/background16.png';

const Invitation = () => {

    const exportRef1 = useRef();
    const exportRef2 = useRef();
    const exportRef3 = useRef();
    const exportRef4 = useRef();
    const exportRef5 = useRef();
    const exportRef6 = useRef();
    const exportRef7 = useRef();
    const exportRef8 = useRef();
    const exportRef9 = useRef();
    const exportRef10 = useRef();
    const exportRef11 = useRef();
    const exportRef12 = useRef();
    const exportRef13 = useRef();
    const exportRef14 = useRef();
    const exportRef15 = useRef();
    const exportRef16 = useRef();
    const dispatch = useDispatch();
    const { detailItem } = useSelector((state) => state.detail)
    console.log(detailItem[0])

    const navigate = useNavigate();

    const exportAsImage = async (element, imageFileName) => {

        console.log(element);
        const canvas = await html2canvas(element);
        const image = canvas.toDataURL("image/png", 1.0);
        downloadImage(image, imageFileName);
        console.log(element);
    };
    const downloadImage = (blob, fileName) => {
        const fakeLink = window.document.createElement("a");
        fakeLink.style = "display:none;";
        fakeLink.download = fileName;

        fakeLink.href = blob;

        document.body.appendChild(fakeLink);
        fakeLink.click();
        document.body.removeChild(fakeLink);

        fakeLink.remove();

    };



    return (
        <>


<Box container sx={{ flexGrow: 1,mx:2}}>
                <Grid item container spacing={3} direction={{ xs: 'column', md: 'row' }} mt={2}
                    alignItems="center"
                    justify="space-around"
                >

                     <Grid item xs={12} sm={6} lg={3} md={6} >
                        <Card sx={{ maxWidth: 300, }} ref={exportRef1} boxShadow="10px 10px 20px #ccc">
                            <Box sx={{ position: 'relative' }} >
                                <CardMedia component="img" height="100%" image={bg1} />
                                <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', color: 'white', padding: '10px', }}>
                                    <Typography variant="h6" sx={{ marginBottom: 1, marginLeft: 1, marginRight: 1 }} align='center' color="blue">You are coordially invited <br />on occasion of</Typography>
                                    <Typography variant="h5" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="darkblue">{detailItem[0].occasion}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="green">Date: {detailItem[0].date}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="purple">Timing:{detailItem[0].timing}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="red">{detailItem[0].address}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 6, marginLeft: 1, marginRight: 1 }} align="center" color="darkgreen">{detailItem[0].name}</Typography>
                                </Box>
                            </Box>
                        </Card>
                        <Button onClick={() => exportAsImage(exportRef1.current, "invitation card1")} sx={{ color: 'white', backgroundImage: 'linear-gradient(to right top, #1a6de9, #00a0ff, #00c5df, #00df86, #a8eb12)', width: 300, ':hover': { bgcolor: 'yellow', color: 'white', } }}
                        >DOWNLOAD
                        </Button>
                    </Grid>

                     <Grid item xs={12} sm={6} lg={3} md={6} >
                        <Card sx={{ maxWidth: 300 }} ref={exportRef2}>
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia component="img" height="100%" image={bg2} />
                                <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', color: 'white', padding: '10px', }}>
                                    <Typography variant="h6" sx={{ marginBottom: 1, marginLeft: 1, marginRight: 1 }} align='center' color="blue">You are coordially invited <br />on occasion of</Typography>
                                    <Typography variant="h5" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="darkblue">{detailItem[0].occasion}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="green">Date: {detailItem[0].date}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="purple">Timing:{detailItem[0].timing}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="red">{detailItem[0].address}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 6, marginLeft: 1, marginRight: 1 }} align="center" color="darkgreen">{detailItem[0].name}</Typography>
                                </Box>
                            </Box>
                        </Card>
                        <Button onClick={() => exportAsImage(exportRef2.current, "invitation card2")} sx={{ color: 'white', backgroundImage: 'linear-gradient(to right top, #1a6de9, #00a0ff, #00c5df, #00df86, #a8eb12)', width: 300, ':hover': { bgcolor: 'yellow', color: 'white', } }}
                        >DOWNLOAD
                        </Button>
                    </Grid>

                     <Grid item xs={12} sm={6} lg={3} md={6} >
                        <Card sx={{ maxWidth: 300 }} ref={exportRef3}>
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia component="img" height="100%" image={bg3} />
                                <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', color: 'white', padding: '10px', }}>
                                    <Typography variant="h6" sx={{ marginBottom: 1, marginLeft: 1, marginRight: 1 }} align='center' color="blue">You are coordially invited <br />on occasion of</Typography>
                                    <Typography variant="h5" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="darkblue">{detailItem[0].occasion}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="green">Date: {detailItem[0].date}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="purple">Timing:{detailItem[0].timing}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="red">{detailItem[0].address}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 6, marginLeft: 1, marginRight: 1 }} align="center" color="darkgreen">{detailItem[0].name}</Typography>
                                </Box>
                            </Box>
                        </Card>
                        <Button onClick={() => exportAsImage(exportRef3.current, "invitation card3")} sx={{ color: 'white', backgroundImage: 'linear-gradient(to right top, #1a6de9, #00a0ff, #00c5df, #00df86, #a8eb12)', width: 300, ':hover': { bgcolor: 'yellow', color: 'white', } }}
                        >DOWNLOAD
                        </Button>
                    </Grid>

                     <Grid item xs={12} sm={6} lg={3} md={6} >
                        <Card sx={{ maxWidth: 300 }} ref={exportRef5}>
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia component="img" height="100%" image={bg5} />
                                <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', color: 'white', padding: '10px', }}>
                                    <Typography variant="h6" sx={{ marginBottom: 1, marginLeft: 1, marginRight: 1 }} align='center' color="blue">You are coordially invited <br />on occasion of</Typography>
                                    <Typography variant="h5" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="darkblue">{detailItem[0].occasion}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="green">Date: {detailItem[0].date}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="purple">Timing:{detailItem[0].timing}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="red">{detailItem[0].address}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 6, marginLeft: 1, marginRight: 1 }} align="center" color="darkgreen">{detailItem[0].name}</Typography>
                                </Box>
                            </Box>
                        </Card>
                        <Button onClick={() => exportAsImage(exportRef5.current, "invitation card5")} sx={{ color: 'white', backgroundImage: 'linear-gradient(to right top, #1a6de9, #00a0ff, #00c5df, #00df86, #a8eb12)', width: 300, ':hover': { bgcolor: 'yellow', color: 'white', } }}
                        >DOWNLOAD
                        </Button>
                    </Grid>

                     <Grid item xs={12} sm={6} lg={3} md={6} >
                        <Card sx={{ maxWidth: 300 }} ref={exportRef6}>
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia component="img" height="100%" image={bg6} />
                                <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', color: 'white', padding: '10px', }}>
                                    <Typography variant="h6" sx={{ marginBottom: 1, marginLeft: 1, marginRight: 1 }} align='center' color="blue">You are coordially invited <br />on occasion of</Typography>
                                    <Typography variant="h5" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="darkblue">{detailItem[0].occasion}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="green">Date: {detailItem[0].date}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="purple">Timing:{detailItem[0].timing}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="red">{detailItem[0].address}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 6, marginLeft: 1, marginRight: 1 }} align="center" color="darkgreen">{detailItem[0].name}</Typography>
                                </Box>
                            </Box>
                        </Card>
                        <Button onClick={() => exportAsImage(exportRef6.current, "invitation card6")} sx={{ color: 'white', backgroundImage: 'linear-gradient(to right top, #1a6de9, #00a0ff, #00c5df, #00df86, #a8eb12)', width: 300, ':hover': { bgcolor: 'yellow', color: 'white', } }}
                        >DOWNLOAD
                        </Button>
                    </Grid>

                     <Grid item xs={12} sm={6} lg={3} md={6} >
                        <Card sx={{ maxWidth: 300 }} ref={exportRef7}>
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia component="img" height="100%" image={bg7} />
                                <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', color: 'white', padding: '10px', }}>
                                    <Typography variant="h6" sx={{ marginBottom: 1, marginLeft: 1, marginRight: 1 }} align='center' color="blue">You are coordially invited <br />on occasion of</Typography>
                                    <Typography variant="h5" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="darkblue">{detailItem[0].occasion}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="green">Date: {detailItem[0].date}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="purple">Timing:{detailItem[0].timing}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="red">{detailItem[0].address}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 6, marginLeft: 1, marginRight: 1 }} align="center" color="darkgreen">{detailItem[0].name}</Typography>
                                </Box>
                            </Box>
                        </Card>
                        <Button onClick={() => exportAsImage(exportRef7.current, "invitation card7")} sx={{ color: 'white', backgroundImage: 'linear-gradient(to right top, #1a6de9, #00a0ff, #00c5df, #00df86, #a8eb12)', width: 300, ':hover': { bgcolor: 'yellow', color: 'white', } }}
                        >DOWNLOAD
                        </Button>
                    </Grid>

                     <Grid item xs={12} sm={6} lg={3} md={6} >
                        <Card sx={{ maxWidth: 300 }} ref={exportRef8}>
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia component="img" height="100%" image={bg8} />
                                <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', color: 'white', padding: '10px', }}>
                                    <Typography variant="h6" sx={{ marginBottom: 1, marginLeft: 1, marginRight: 1 }} align='center' color="blue">You are coordially invited <br />on occasion of</Typography>
                                    <Typography variant="h5" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="darkblue">{detailItem[0].occasion}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="green">Date: {detailItem[0].date}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="purple">Timing:{detailItem[0].timing}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="red">{detailItem[0].address}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 6, marginLeft: 1, marginRight: 1 }} align="center" color="darkgreen">{detailItem[0].name}</Typography>
                                </Box>
                            </Box>
                        </Card>
                        <Button onClick={() => exportAsImage(exportRef8.current, "invitation card8")} sx={{ color: 'white', backgroundImage: 'linear-gradient(to right top, #1a6de9, #00a0ff, #00c5df, #00df86, #a8eb12)', width: 300, ':hover': { bgcolor: 'yellow', color: 'white', } }}
                        >DOWNLOAD
                        </Button>
                    </Grid>

                     <Grid item xs={12} sm={6} lg={3} md={6} >
                        <Card sx={{ maxWidth: 300 }} ref={exportRef9}>
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia component="img" height="100%" image={bg9} />
                                <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', color: 'white', padding: '10px', }}>
                                    <Typography variant="h6" sx={{ marginBottom: 1, marginLeft: 1, marginRight: 1 }} align='center' color="blue">You are coordially invited <br />on occasion of</Typography>
                                    <Typography variant="h5" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="darkblue">{detailItem[0].occasion}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="green">Date: {detailItem[0].date}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="purple">Timing:{detailItem[0].timing}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="red">{detailItem[0].address}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 6, marginLeft: 1, marginRight: 1 }} align="center" color="darkgreen">{detailItem[0].name}</Typography>
                                </Box>
                            </Box>
                        </Card>
                        <Button onClick={() => exportAsImage(exportRef9.current, "invitation card9")} sx={{ color: 'white', backgroundImage: 'linear-gradient(to right top, #1a6de9, #00a0ff, #00c5df, #00df86, #a8eb12)', width: 300, ':hover': { bgcolor: 'yellow', color: 'white', } }}
                        >DOWNLOAD
                        </Button>
                    </Grid>

                     <Grid item xs={12} sm={6} lg={3} md={6} >
                        <Card sx={{ maxWidth: 300 }} ref={exportRef10}>
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia component="img" height="100%" image={bg10} />
                                <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', color: 'white', padding: '10px', }}>
                                    <Typography variant="h6" sx={{ marginBottom: 1, marginLeft: 1, marginRight: 1 }} align='center' color="blue">You are coordially invited <br />on occasion of</Typography>
                                    <Typography variant="h5" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="darkblue">{detailItem[0].occasion}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="green">Date: {detailItem[0].date}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="purple">Timing:{detailItem[0].timing}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="red">{detailItem[0].address}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 6, marginLeft: 1, marginRight: 1 }} align="center" color="darkgreen">{detailItem[0].name}</Typography>
                                </Box>
                            </Box>
                        </Card>
                        <Button onClick={() => exportAsImage(exportRef10.current, "invitation card10")} sx={{ color: 'white', backgroundImage: 'linear-gradient(to right top, #1a6de9, #00a0ff, #00c5df, #00df86, #a8eb12)', width: 300, ':hover': { bgcolor: 'yellow', color: 'white', } }}
                        >DOWNLOAD
                        </Button>
                    </Grid>

                     <Grid item xs={12} sm={6} lg={3} md={6} >
                        <Card sx={{ maxWidth: 300 }} ref={exportRef11}>
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia component="img" height="100%" image={bg11} />
                                <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', color: 'white', padding: '10px', }}>
                                    <Typography variant="h6" sx={{ marginBottom: 1, marginLeft: 1, marginRight: 1 }} align='center' color="blue">You are coordially invited <br />on occasion of</Typography>
                                    <Typography variant="h5" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="darkblue">{detailItem[0].occasion}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="green">Date: {detailItem[0].date}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="purple">Timing:{detailItem[0].timing}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="red">{detailItem[0].address}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 6, marginLeft: 1, marginRight: 1 }} align="center" color="darkgreen">{detailItem[0].name}</Typography>
                                </Box>
                            </Box>
                        </Card>
                        <Button onClick={() => exportAsImage(exportRef11.current, "invitation card11")} sx={{ color: 'white', backgroundImage: 'linear-gradient(to right top, #1a6de9, #00a0ff, #00c5df, #00df86, #a8eb12)', width: 300, ':hover': { bgcolor: 'yellow', color: 'white', } }}
                        >DOWNLOAD
                        </Button>
                    </Grid>

                     <Grid item xs={12} sm={6} lg={3} md={6} >
                        <Card sx={{ maxWidth: 300 }} ref={exportRef12}>
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia component="img" height="100%" image={bg12} />
                                <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', color: 'white', padding: '10px', }}>
                                    <Typography variant="h6" sx={{ marginBottom: 1, marginLeft: 1, marginRight: 1 }} align='center' color="blue">You are coordially invited <br />on occasion of</Typography>
                                    <Typography variant="h5" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="darkblue">{detailItem[0].occasion}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="green">Date: {detailItem[0].date}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="purple">Timing:{detailItem[0].timing}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="red">{detailItem[0].address}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 6, marginLeft: 1, marginRight: 1 }} align="center" color="darkgreen">{detailItem[0].name}</Typography>
                                </Box>
                            </Box>
                        </Card>
                        <Button onClick={() => exportAsImage(exportRef12.current, "invitation card12")} sx={{ color: 'white', backgroundImage: 'linear-gradient(to right top, #1a6de9, #00a0ff, #00c5df, #00df86, #a8eb12)', width: 300, ':hover': { bgcolor: 'yellow', color: 'white', } }}
                        >DOWNLOAD
                        </Button>
                    </Grid>

                     <Grid item xs={12} sm={6} lg={3} md={6} >
                        <Card sx={{ maxWidth: 300 }} ref={exportRef13}>
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia component="img" height="100%" image={bg13} />
                                <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', color: 'white', padding: '10px', }}>
                                    <Typography variant="h6" sx={{ marginBottom: 1, marginLeft: 1, marginRight: 1 }} align='center' color="blue">You are coordially invited <br />on occasion of</Typography>
                                    <Typography variant="h5" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="darkblue">{detailItem[0].occasion}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="green">Date: {detailItem[0].date}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="purple">Timing:{detailItem[0].timing}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="red">{detailItem[0].address}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 6, marginLeft: 1, marginRight: 1 }} align="center" color="darkgreen">{detailItem[0].name}</Typography>
                                </Box>
                            </Box>
                        </Card>
                        <Button onClick={() => exportAsImage(exportRef13.current, "invitation card13")} sx={{ color: 'white', backgroundImage: 'linear-gradient(to right top, #1a6de9, #00a0ff, #00c5df, #00df86, #a8eb12)', width: 300, ':hover': { bgcolor: 'yellow', color: 'white', } }}
                        >DOWNLOAD
                        </Button>
                    </Grid>

                     <Grid item xs={12} sm={6} lg={3} md={6} >
                        <Card sx={{ maxWidth: 300 }} ref={exportRef14}>
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia component="img" height="100%" image={bg14} />
                                <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', color: 'white', padding: '10px', }}>
                                    <Typography variant="h6" sx={{ marginBottom: 1, marginLeft: 1, marginRight: 1 }} align='center' color="blue">You are coordially invited <br />on occasion of</Typography>
                                    <Typography variant="h5" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="darkblue">{detailItem[0].occasion}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="green">Date: {detailItem[0].date}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="purple">Timing:{detailItem[0].timing}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="red">{detailItem[0].address}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 6, marginLeft: 1, marginRight: 1 }} align="center" color="darkgreen">{detailItem[0].name}</Typography>
                                </Box>
                            </Box>
                        </Card>
                        <Button onClick={() => exportAsImage(exportRef14.current, "invitation card14")} sx={{ color: 'white', marginBottom: '10px', backgroundImage: 'linear-gradient(to right top, #1a6de9, #00a0ff, #00c5df, #00df86, #a8eb12)', width: 300, ':hover': { bgcolor: 'yellow', color: 'white', } }}
                        >DOWNLOAD
                        </Button>
                    </Grid>

                     <Grid item xs={12} sm={6} lg={3} md={6} >
                        <Card sx={{ maxWidth: 300 }} ref={exportRef15}>
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia component="img" height="100%" image={bg15} />
                                <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', color: 'white', padding: '10px', }}>
                                    <Typography variant="h6" sx={{ marginBottom: 1, marginLeft: 1, marginRight: 1 }} align='center' color="blue">You are coordially invited <br />on occasion of</Typography>
                                    <Typography variant="h5" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="darkblue">{detailItem[0].occasion}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="green">Date: {detailItem[0].date}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="purple">Timing:{detailItem[0].timing}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="red">{detailItem[0].address}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 6, marginLeft: 1, marginRight: 1 }} align="center" color="darkgreen">{detailItem[0].name}</Typography>
                                </Box>
                            </Box>
                        </Card>
                        <Button onClick={() => exportAsImage(exportRef15.current, "invitation card15")} sx={{ color: 'white', marginBottom: '10px', backgroundImage: 'linear-gradient(to right top, #1a6de9, #00a0ff, #00c5df, #00df86, #a8eb12)', width: 300, ':hover': { bgcolor: 'yellow', color: 'white', } }}
                        >DOWNLOAD
                        </Button>
                    </Grid>

                     <Grid item xs={12} sm={6} lg={3} md={6} >
                        <Card sx={{ maxWidth: 300 }} ref={exportRef16}>
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia component="img" height="100%" image={bg16} />
                                <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', color: 'white', padding: '10px', }}>
                                    <Typography variant="h6" sx={{ marginBottom: 1, marginLeft: 1, marginRight: 1 }} align='center' color="blue">You are coordially invited <br />on occasion of</Typography>
                                    <Typography variant="h5" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="darkblue">{detailItem[0].occasion}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="green">Date: {detailItem[0].date}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="purple">Timing:{detailItem[0].timing}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 1, marginRight: 1 }} align="center" color="red">{detailItem[0].address}</Typography>
                                    <Typography variant="h6" sx={{ marginBottom: 6, marginLeft: 1, marginRight: 1 }} align="center" color="darkgreen">{detailItem[0].name}</Typography>
                                </Box>
                            </Box>
                        </Card>
                        <Button onClick={() => exportAsImage(exportRef16.current, "invitation card16")} sx={{ color: 'white', marginBottom: '10px', backgroundImage: 'linear-gradient(to right top, #1a6de9, #00a0ff, #00c5df, #00df86, #a8eb12)', width: 300, ':hover': { bgcolor: 'yellow', color: 'white', } }}
                        >DOWNLOAD
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Invitation;