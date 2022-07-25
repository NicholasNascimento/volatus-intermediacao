import React, { useContext } from 'react'
import * as S from '../styles/styles'
import Lottie from 'react-lottie';
import animationWhatIs from '../lotties/peer-to-peer.json';
import animationContactUs from '../lotties/contact-us.json';
import animationOmnichannel from '../lotties/omnichannel-crm-dashboard-chat-to-case.json';
import Header from '../components/Header';
import { DataContext } from '../context/DataContext';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  const { menu } = useContext(DataContext)

  const whatIsdefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationWhatIs,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const contactUsdefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationContactUs,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const omnichanneldefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationOmnichannel,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <S.Container>
      <Header />
      <ScrollToTop />

      {!menu &&
        <>
          <S.Main>
            <S.Banner src="/mainbanner.jpeg" alt="Banner Volatus" />
            <S.MobileBanner src="/mainbannermobile.jpeg" alt="Banner Volatus" />
            <S.MobileTitleBox>
              <S.MobileTitle>P2P COM SEGURANÇA E FACILIDADE<br /><strong>COMPRE E VENDA SUAS CRIPTOMOEDAS SEM DORES DE CABEÇA!</strong> </S.MobileTitle>
            </S.MobileTitleBox>
          </S.Main>

          <S.Whatis id='what'>
            <S.Informations>
              <S.TextBox>
                <S.InformationsTitle>O que é P2P?</S.InformationsTitle>
                <S.Box>
                  <S.TopTextsParagraph>
                    Peer-to-peer ou P2P é uma arquitetura de redes de computadores 
                    onde cada um dos pontos ou nós da rede funciona tanto como cliente 
                    quanto como servidor podemos citar como exemplo os Torrents.
                  </S.TopTextsParagraph>
                </S.Box>
              </S.TextBox>
              <S.InformationsImg>
                <Lottie 
                  options={whatIsdefaultOptions}
                  height={600}
                  width={500}
                />
              </S.InformationsImg>

              <S.InformationsImgMedium>
                <Lottie 
                  options={whatIsdefaultOptions}
                  height={400}
                  width={300}
                />
              </S.InformationsImgMedium>

              <S.InformationsImgSmall>
                <Lottie 
                  options={whatIsdefaultOptions}
                  height={200}
                  width={150}
                />
              </S.InformationsImgSmall>
            </S.Informations>
            <S.BottomTextsParagraph>
              No nosso contexto, P2P é uma maneira de comprar e vender criptomoedas diretamente com o cliente, sem passar 
              por sites (corretoras e exchanges). Utilizamos os seguintes meios de pagamento: PIX, permuta de criptomoedas 
              e cartão de crédito!
            </S.BottomTextsParagraph>
          </S.Whatis>

          <S.About id='about'>
            <S.AboutSectionTitle>NOSSO TRABALHO</S.AboutSectionTitle>
            <S.AboutLineBox>
              <S.AboutImg>
                <Lottie 
                  options={omnichanneldefaultOptions}
                  height={300}
                  width={500}
                />
              </S.AboutImg>

              <S.AboutMediumImg>
                <Lottie 
                  options={omnichanneldefaultOptions}
                  height={200}
                  width={400}
                />
              </S.AboutMediumImg>

              <S.AboutSmallImg>
                <Lottie 
                  options={omnichanneldefaultOptions}
                  height={150}
                  width={200}
                />
              </S.AboutSmallImg>
              <S.AboutTopTextContent>
                <S.AboutTopTextBox>
                  <S.TopTextsParagraph>
                    Oferecemos um atendimento humanizado e personalizado, já atuamos no mercado desde o começo de 2021 então 
                    temos um vasto entendimento sobre as melhores práticas do mercado. Além disso, temos familiaridade em 
                    múltiplas redes, mesmo as menos conhecidas!<br /> <br />
                    Conseguimos oferecer até certas moedas não listadas nas principais exchanges, isso é de muita ajuda para 
                    quem procura projetos que estão no começo de seu desenvolvimento.
                  </S.TopTextsParagraph>
                </S.AboutTopTextBox>
              </S.AboutTopTextContent>
            </S.AboutLineBox>
            <S.AboutBigTextParagraph>
              Nosso principal serviço é a compra e venda de criptoativos, sem valores mínimos nem máximos, mas também 
              oferecemos consultorias para os iniciantes no meio e auxílio na compra e venda de NFTs.Nosso principal serviço 
              é a compra e venda de criptoativos, sem valores mínimos nem máximos, mas também oferecemos consultorias para 
              os iniciantes no meio e auxílio na compra e venda de NFTs.<br /> <br />
              Atuamos em horário estendido, de segunda a segunda, praticamente 24 horas por dia!
            </S.AboutBigTextParagraph>
          </S.About>

          <S.Advantages id='advantages'>
            <S.AdvantagesTitle>Vantagens</S.AdvantagesTitle>

            <S.CardsBoxColumn>
              <S.CardsBox>

              <S.CardBox>
                <S.Check />

                <h3>Segurança</h3>
                <p>Fazemos negociações no mercado cripto há mais de um ano e temos milhares de recomendações!</p>
              </S.CardBox>

              <S.CardBox>
                <S.Check />

                <h3>Rapidez</h3>
                <p>Enviamos suas criptos em questão de segundos!</p>
              </S.CardBox>

              <S.CardBox>
                <S.Check />

                <h3>Flexibilidade</h3>
                <p>Além de não ter valores mínimos para compra, ficamos praticamente 24 horas por dia on-line.</p>
              </S.CardBox>
              </S.CardsBox>

              <S.CardsBox>
              <S.CardBox>
                <S.Check />

                <h3>Preço</h3>
                <p>Buscamos sempre soluções para que você receba suas criptos com taxas bem menores que as principais 
                  corretoras.
                </p>
              </S.CardBox>

              <S.CardBox>
                <S.Check />

                <h3>Atendimento</h3>
                <p>Oferecemos um atendimento humanizado e personalizado, tirando todas as suas dúvidas e te ajudando a 
                  começar com o pé direito no mercado.
                </p>
              </S.CardBox>

              <S.CardBox>
                <S.Check />

                <h3>Privacidade</h3>
                <p>##Diversidade no pagamento é um diferencial</p>
              </S.CardBox>
              </S.CardsBox>
            </S.CardsBoxColumn>
          </S.Advantages>

          {/* <S.Collaborators id='collaborators'>
            <S.CollaboratorsTitle>
              VOLATUS TEAM
            </S.CollaboratorsTitle>
            <S.CollaboratorArea>
              <S.LeftCollaboratorPhotoBox />
              <S.CollaboratorTextBox>
                <S.CollaboratorName>John Doe</S.CollaboratorName>
                <S.CollaboratorDescription>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book.
                </S.CollaboratorDescription>
              </S.CollaboratorTextBox>
            </S.CollaboratorArea>

            <S.CollaboratorArea>
              <S.CollaboratorTextBox>
                <S.CollaboratorName>John Doe</S.CollaboratorName>
                <S.CollaboratorDescription>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book.
                </S.CollaboratorDescription>
              </S.CollaboratorTextBox>
              <S.RightCollaboratorPhotoBox />
            </S.CollaboratorArea>
          </S.Collaborators> */}

          <S.Contact id='contact'>
            <S.ContactBannerTitle>
              FALE CONOSCO
            </S.ContactBannerTitle>
            <S.ContactInformations>
              <S.ContactInformationsContent>
                <S.ContactTitle>Entre em contato com a gente!</S.ContactTitle>
    
                <S.ContactList>
                  <S.ContactListItem>
                    <S.EmailIcon />   
                    contato@volatusintermedicao.com
                  </S.ContactListItem>
                </S.ContactList>
          
                <S.WppButton>
                  <S.WppIcon />  
                  Fale conosco
                </S.WppButton>
              </S.ContactInformationsContent>
              <S.ContactImg>
                <Lottie 
                  options={contactUsdefaultOptions}
                  height={550}
                  width={700}
                />
              </S.ContactImg>

              <S.MediumContactImg>
                <Lottie 
                  options={contactUsdefaultOptions}
                  height={400}
                  width={500}
                />
              </S.MediumContactImg>

              <S.SmallContactImg>
                <Lottie 
                  options={contactUsdefaultOptions}
                  height={250}
                  width={350}
                />
              </S.SmallContactImg>
            </S.ContactInformations>
          </S.Contact>

          <Footer />
        </>
      }
    </S.Container>
  )
}
