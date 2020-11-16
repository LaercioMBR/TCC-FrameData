db.createUser(
    {
        user: "manager",
        pwd: "administrator",
        roles: [
            {
                role: "readWrite",
                db: "framedata"
            }
        ]
    }
);