import { FloatingWhatsApp } from 'react-floating-whatsapp'
export default function Whatsapp() {

    return (
        <FloatingWhatsApp
            accountName='Crescer e Aprender'
            statusMessage='ONLINE'
            chatMessage='Bem vindo ao hotelzinho Crescer e Aprender'
            placeholder='Digite sua mensagem'
            allowEsc={true}
            allowClickAway={true}
            darkMode={true}
            phoneNumber='+5534999110991'
            avatar='/img/logo2.PNG'
        />
    )
}