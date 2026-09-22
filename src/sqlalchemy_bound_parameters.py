"""Parameter-binding regression fixture for the dev security scanner."""

from sqlalchemy import text


def users_for_tenant(db, tenant_id: str, email: str | None = None):
    params = {"tenant_id": tenant_id}
    email_clause = ""
    if email is not None:
        email_clause = " AND email = :email"
        params["email"] = email

    return db.execute(
        text(f"SELECT id FROM users WHERE tenant_id = :tenant_id{email_clause}"),
        params,
    )
