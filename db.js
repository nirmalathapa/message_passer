import Pool from 'pg';

export const pool =  new Pool.Pool({
  user: "postgres",
  password: "",
  host: "localhost",
  port: 5432,
  database: "messagepasserdb" //if error, try messagePasserDB
});
// file currently not being used