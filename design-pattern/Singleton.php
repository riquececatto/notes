<?php

class Singleton
{
    private static string $hostname = '';
    private static string $username = '';
    private static string $password = '';
    private static string $database = '';
    private static int $port = 3306;

    private static ?\mysqli $mysqli = null;

    private function __construct()
    {
    }

    private function __clone()
    {
    }

    public function __wakeup()
    {
        throw new \Exception('');
    }

    public static function getConnection(): \mysqli
    {
        if (self::$mysqli === null) {
            self::$mysqli = new mysqli(
                self::$hostname,
                self::$username,
                self::$password,
                self::$database,
                self::$port
            );
        }

        $error = mysqli_error(self::$mysqli);
        if (!empty($error)) {
            error_log('Falha ao conectar com o banco de dados: ' . $error);

            throw new \Exception('Falha ao conectar com o banco de dados.');
        }

        return self::$mysqli;
    }

    public static function closeConnection(): void
    {
        if (self::$mysqli !== null) {
            mysqli_close(self::$mysqli);
        }

        self::$mysqli = null;
    }
}

?>
