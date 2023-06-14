import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import gif1 from "./assets/3b4.gif";
import gif2 from "./assets/77j.gif";
import gif3 from "./assets/1dLR.gif";
import gif4 from "./assets/3UOr.gif";
import gif5 from "./assets/6tp.gif";
import gif6 from './assets/1VFa.gif';
import gif7 from './assets/4ziA.gif';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';


const steps = [
    {
        label: 'PARABÉNS #1',
        description: `Olá amigo este é um presente simples mas feito com muito carinho e amor ( mentira, só js e piadas de 5a série KKKKK)`,
        img: gif1

    },
    {
        label: 'PARABÉNS #2',
        description:
            'VOCE É UM AMIGO MUITO TOP E FENOMENAL, PEGA NA CABEÇA DO MEU XABLAU',
        img: gif2

    },
    {
        label: 'PARABÉNS #3',
        description: `HOJE NÃO É SEU ANIVERSÁRIO MAS VOCE ESTÁ DE PARABÉNS KKK MENTIRA HOJE É SEU ANIVERSÁRIO E VC ESTÁ DE PARABÉNS`,
        img: gif3
    },
    {
        label: 'PARABÉNS #4',
        description: `O QUE É UM PONTINHO PRETO NO PALCO?? 
        EH VC TOCANDO UMA GUITARRA DE 4 CORDAS`,
        img: gif5
    },
    {
        label: 'PARABÉNS #5',
        description: `A ESSA ALTURA VC DEVE ESTAR SE PERGUNTANDO, 
        "o que eu fiz pra merecer isso??" E EU SÓ POSSO DIZER QUE NADA NGM MANDOU SER MEU AMIGO`,
        img: gif4
    },
    {
        label: 'PARABÉNS #6',
        description: `ESSE POEMA EU PEDI PRO CHATGPT FAZER ESPERO QUE GOSTE PQ EU N TENHO CRIATIVIDADE,
         
        Nos acordes do contra baixo, ele se destaca,
        Augusto, que brilha com sua marca.
        Entre tons de preto e branco (BEM EMO), sua cor favorita é expressão,
        Um estilo único, mergulhado na emoção.

        Seus hobbies variados são como notas no ar,
        Tocando seu instrumento e em games a se aventurar.
        Harry Potter, animes e a Amanda são sua paixão,
        Enquanto o Baby Metal e o rock aceleram seu coração.

        Sua qualidade mais admirável, sem dúvida, é o seu ser,
        Augusto é simplesmente "top", não há como esquecer.
        Seu lugar favorito no mundo é um mistério a desvendar,
        Mas em cada acorde, ele cria seu próprio lugar.

        Entre pratos preparados com carinho, pelo cozinheiro Lucas,
        Augusto desfruta de sabores que são pura luxúria.
        Seu maior sonho é ser um desenvolvedor de C# backend,
        E em cada linha de código, ele constrói seu lendário ascendente.

        Sua personalidade é descrita com uma frase especial,
        "Arrombadinho fofo do caralho", em um tom cordial.
        Entre os roles com os emos geladinhos, vocês se encontraram,
        No mundo das dose duplas, amizades se formaram.

        Que a vida lhe traga melodias doces e encantadoras,
        Que seus sonhos se realizem, abrindo novas portas.
        Augusto, neste dia especial, celebramos você,
        Um amigo verdadeiro, cuja música nos faz renascer.`,
        img: gif6
    },

    {
        label: 'PARABÉNS #7',
        description: `E ERA ISSO, ACABOU A PALHAÇADA, AMO VC SEU LINDO DO CARALHO ❤️`,
        img: gif7
    },
];

function App() {

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    }; 

    return (
        <>
            <AppBar>
                <Toolbar variant="dense">
                    <Link to={'/'}>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <ArrowBackIcon />

                        </IconButton>
                    </Link>

                    <Typography variant="h6" color="inherit" component="div">
                        Voltar
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container maxWidth="lg">
                <Box sx={{ margin: 2 }} >
                    <Stepper orientation='vertical' activeStep={activeStep}>
                        {steps.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel
                                    optional={
                                        index === 2 ? (
                                            <Typography variant="caption">Last step</Typography>
                                        ) : null
                                    }
                                >
                                    {step.label}
                                </StepLabel>
                                <StepContent>
                                    <Typography>{step.description}</Typography>
                                    <Box>
                                        <img src={step.img} width={300} />
                                    </Box>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            {

                                                index === steps.length - 1
                                                    ? (<></>)
                                                    : (
                                                        <Button
                                                            variant="contained"
                                                            onClick={handleNext}
                                                            sx={{ mt: 1, mr: 1 }}
                                                        >
                                                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                                        </Button>
                                                    )
                                            }
                                            <Button
                                                disabled={index === 0}
                                                onClick={handleBack}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                Back
                                            </Button>
                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </Container>
        </>
    );
}

export default App;
