import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Принимает заявку с сайта РемБыт и отправляет письмо на rem4697@mail.ru"""

    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    try:
        body = json.loads(event.get("body") or "{}")
        name = body.get("name", "").strip()
        phone = body.get("phone", "").strip()

        if not name or not phone:
            return {
                "statusCode": 400,
                "headers": cors_headers,
                "body": json.dumps({"error": "Имя и телефон обязательны"}, ensure_ascii=False),
            }

        smtp_user = "rem4697@mail.ru"
        smtp_password = os.environ["SMTP_PASSWORD"]

        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"Новая заявка с сайта РемБыт — {name}"
        msg["From"] = smtp_user
        msg["To"] = smtp_user

        html = f"""
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background: #1a56db; padding: 20px; text-align: center;">
            <h2 style="color: white; margin: 0;">Новая заявка с сайта</h2>
          </div>
          <div style="padding: 24px;">
            <p style="margin: 0 0 12px;"><strong>Имя:</strong> {name}</p>
            <p style="margin: 0 0 12px;"><strong>Телефон:</strong> <a href="tel:{phone}">{phone}</a></p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;">
            <p style="color: #888; font-size: 13px; margin: 0;">Заявка с сайта РемБыт — ремонт бытовой техники</p>
          </div>
        </div>
        """

        msg.attach(MIMEText(html, "html"))

        with smtplib.SMTP_SSL("smtp.mail.ru", 465) as server:
            server.login(smtp_user, smtp_password)
            server.sendmail(smtp_user, smtp_user, msg.as_string())

        return {
            "statusCode": 200,
            "headers": cors_headers,
            "body": json.dumps({"success": True}),
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "headers": cors_headers,
            "body": json.dumps({"error": str(e)}),
        }