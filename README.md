<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tameable Spiders</title>
    <script>
        function tameSpider() {
            let spider = {
                name: "Tamed Spider",
                attackPower: 12,
                followsPlayer: true,
                attackMode: "Assist Player",
                inventory: []
            };
            alert(spider.name + " is tamed! Attack power set to " + spider.attackPower);
        }
    </script>
</head>
<body>
    <h1>Spider Taming</h1>
    <button onclick="tameSpider()">Tame Spider with Sugar</button>
</body>
</html>
