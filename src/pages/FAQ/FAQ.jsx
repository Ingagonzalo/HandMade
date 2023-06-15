import React from 'react';
import './FAQ.css';
import Hero from '../../components/Hero/Hero';
import RespuestasFAQ from '../../components/RespuestasFAQ/RespuestasFAQ';

const FAQ = () => {
  return (
    <div>
      <Hero></Hero>
      <article className='faqArticle'>
        <h2>Cómo comprar</h2>
        <p>
          Para hacer tu pedido, lo primero que tenés que hacer es comunicarte
          con nosotros por WhatsApp al:<strong> 094 588 664</strong>
        </p>
        <p>
          En nuestro perfil de WhatsApp encontrarás todo nuestro catálogo de
          productos disponibles, así que no dudes en revisarlo para encontrar lo
          que estás buscando.
        </p>
        <p>
          Si viste un producto que te gustó en nuestra página web o en nuestro
          perfil de Instagram y no lo encontrás en el catálogo, no te preocupes.
          Simplemente mandanos una captura de pantalla del producto y te diremos
          si todavía está disponible.
        </p>
        <p>
 
          Al hacer tu pedido, es importante que nos proporciones la siguiente
          información para que podamos procesarlo adecuadamente:
        </p>
        <ul className='faqArticleList'>
          <li>
            Los productos que deseás adquirir, seleccionados del catálogo o con
            captura de pantalla.
          </li>
          <li> Tu nombre y apellido.</li>
          <li> Tu número de teléfono.</li>
          <li>
            Cómo deseás obtener el producto (por envío o retirándolo en el local
            de Pocitos).
          </li>
          <li>Cómo vas a abonar (Transferencia, depósito o Mercado Pago).</li>
        </ul>
        <p>
          Una vez que nos hayas proporcionado esta información, te escribiremos
          para confirmarte la disponibilidad y guiarte con el proceso de compra.
        </p>
        <p>
          Es importante que sepas que tomamos pedidos hasta el día miércoles
          para poder tener lista tu compra el viernes de esa semana. Si comprás
          después del miércoles, tu pedido estará listo para la semana
          siguiente.
        </p>
        <p>
          Tené en cuenta que la compra se confirma únicamente abonando la
          totalidad del pago. Una vez que hayas realizado el pago, te enviaremos
          tu pedido por el método de envío que hayas elegido o te diremos cuándo
          podés retirarlo en nuestro local de Pocitos.
        </p>
        <p>
          ¡Esperamos tu pedido! No dudes en comunicarte con nosotros si tenés
          cualquier pregunta o si necesitás ayuda para hacer tu compra.
        </p>
      </article>
      <article className='faqArticle'>
        <h2>Formas de pago</h2>

        <p>
          En Hand Made queremos hacer tu experiencia de compra lo más fácil y
          cómoda posible, por eso ofrecemos diferentes formas de pago para que
          elijas la que más te conviene.
        </p>
        <p>Para adquirir tus productos, podés abonar por:</p>
        <ul className='faqArticleList'>
          <li>Transferencia a través de Mi dinero, Prex o Brou, oca blue.</li>
          <li>
            Depósitos a través de Mi dinero, Prex, Brou y OCA. Tené en cuenta
            que los depósitos tienen un costo de $50 que se descuentan del monto
            que depositás. Por ejemplo, si tu compra fue de $250, debés
            depositar $300 para que incluya el valor del depósito.
          </li>
          <li>Mercado Pago.</li>
        </ul>
        <p>
          Si tenés alguna duda sobre cómo hacer los pagos, no dudes en
          comunicarte con nosotros por WhatsApp y te brindaremos la información
          necesaria para que puedas realizar tu compra sin problemas.
        </p>
        <p>
          ¡Gracias por elegir Hand Made! Estamos felices de poder ofrecerte
          nuestros productos artesanales de calidad, esperamos que disfrutes de
          tu compra.
        </p>
      </article>
      <article className='faqArticle'>
        <h2>Envíos</h2>
        <p>
          En Hand Made queremos que nuestros productos lleguen a tus manos lo
          más pronto posible, por eso realizamos envíos a todo el país.
        </p>
        <p>
          Los envíos se realizan únicamente los días viernes para asegurarnos de
          que los productos lleguen en las mejores condiciones.
        </p>
        <p> Trabajamos con dos opciones de envío: DAC y Correo Uruguayo. </p>
        <p> DAC:</p>
        <ul className='faqArticleList'>
          <li> Costo de envío: $150-$180. </li>
          <li> Se abona al momento de recibir o retirar el paquete. </li>
          <li> El envío tarda entre 24 y 48 horas.</li>
          <li>
            Si elegís esta opción, al momento de hacer tu pedido necesitaremos
            los siguientes datos: nombre, apellido, CI, destino y un número de
            contacto.
          </li>
        </ul>
        <p> Correo Uruguayo:</p>
        <ul className='faqArticleList'>
          <li>Costo de envío: $110.</li>
          <li>Se abona al momento de realizar la compra.</li>
          <li>El envío tarda entre 3 y 4 días hábiles.</li>
          <li>
            Si elegís esta opción, al momento de hacer tu pedido necesitaremos
            los siguientes datos: nombre, apellido, calle, número, código
            postal, localidad, departamento y un número de contacto.
          </li>
        </ul>{' '}
        <p>
          Recordá que al momento de hacer tu pedido es importante que incluyas
          la forma en la que deseás obtener tu producto: por envío o retirándolo
          en el local de Pocitos.
        </p>
        <p>
          Si tenés alguna consulta sobre el envío de tus productos, no dudes en
          comunicarte con nosotros por WhatsApp y te brindaremos toda la
          información que necesitás para que tu compra llegue en tiempo y forma.
        </p>
      </article>
      <article className='faqArticle'>
        <h2>Pick up en el local</h2>
        <div className='faqArticleColumn'>
          <div>
            <p>
              Te esperamos en Casa BLUME para que puedas retirar tus pedidos y
              conocer nuestros productos disponibles.
            </p>
            <p>
              Encontranos en Benito Blanco 983, entre José Martí y av. Brasil.
              Los pedidos realizados durante la semana pueden ser retirados allí
              a partir del viernes siguiente.
            </p>
            <p>
              En nuestro local vas a poder encontrar todos los productos
              disponibles (sujetos a stock) como pulseras, anillos y cadenitas.
            </p>

            <p>
              El horario de atención al público es de lunes a viernes de 11:00 a
              19:00 horas y los sábados de 11:00 a 16:00 horas.
            </p>

            <p>
              Si tenés alguna pregunta sobre cómo llegar al local o cualquier
              otra consulta, no dudes en contactarnos. ¡Te esperamos!
            </p>
          </div>
          <div>
            <iframe
              title='My Unique Title'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.7327538721997!2d-56.151258423399575!3d-34.913155573907545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81a326e837d3%3A0xd6faa20056b59892!2sCasa%20Blume%20-%20Multimarca!5e0!3m2!1ses!2sar!4v1685919269628!5m2!1ses!2sar'
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </article>
      <article className='faqArticle'>
      <RespuestasFAQ/>
      </article>

    </div>
  );
};

export default FAQ;
