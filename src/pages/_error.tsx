import React from "react";
import Head from "../components/head";
import Link from "../components/link";

const statusCodes = {
  400: "400: Bad Request",
  403: "403: Forbidden",
  404: "404: Not Found",
  405: "405: Method Not Allowed",
  500: "500: Internal Server Error",
};

const MyError = (props) => {
  const { statusCode } = props;

  const title =
    props.title ||
    statusCodes[statusCode] ||
    "An unexpected error has occurred";

  return (
    <div className="not-found-page">
      <Head>
        <title>{title}</title>
      </Head>
      <h1>
        <Link href={`/`} className="link-homepage"></Link>
        Страница не найдена
      </h1>
      <p className="para-bordered">
        Страница, которую Вы ищете, не&nbsp;найдена. Возможно, она была удалена,
        изменился её адрес, либо страница временно недоступна.
      </p>
      <p className="para-bordered">Попробуйте следующее:</p>
      <ul>
        <li>
          Убедитесь, что адрес, набранный в&nbsp;адресной строке Вашего
          браузера, не&nbsp;содержит ошибок.
        </li>
        <li>
          Нажмите кнопку «
          <span
            className={`error-page-link`}
            onClick={() => global.location.reload()}
          >
            Обновить
          </span>
          » или повторите попытку позже.
        </li>
        <li>
          Нажмите кнопку «
          <span
            className={`error-page-link`}
            onClick={() => global.history.back()}
          >
            Назад
          </span>
          », чтобы вернуться на&nbsp;предыдущую страницу.
        </li>
      </ul>
      <p className="para-bordered">
        Если Вы считаете, что запрошенная Вами страница должна находиться
        по&nbsp;этому адресу или Вы перешли на&nbsp;нее по&nbsp;ссылке
        с&nbsp;одной из&nbsp;страниц этого&nbsp;же сайта, пожалуйста,{" "}
        <Link href="/contact" className="error-page-link">
          сообщите мне
        </Link>{" "}
        об&nbsp;этом.
      </p>
    </div>
  );
};

MyError.getInitialProps = ({ res, err, asPath }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  // next.js has issues with urls ending with slashes
  if (statusCode === 404) {
    const Location = asPath
      .replace(/\/+/g, "/")
      .replace(/\/+$/, "")
      .replace(/\/+#/, "#")
      .replace(/\/+\?/, "?");

    if (res && asPath !== Location) {
      res.writeHead(302, { Location });
      res.end();
    }
  }

  return { statusCode };
};

export default MyError;
