import MetaTrader5 as mt5
from datetime import datetime, timedelta
import time
import json
from pandas.plotting import register_matplotlib_converters
register_matplotlib_converters()

try:
    with open("./pyscript/credentials.txt",  "r") as file:
        credentials = json.loads(file.read())
except FileNotFoundError:
    print(json.dumps("Error: credentials.txt not found"))
    exit(1)


while True:
    try:
        data = json.loads(input())

        server = data["server"]

        if mt5.initialize(credentials[server]["path"]):

            login = credentials[server]["login"]
            password = credentials[server]["password"]
            server = credentials[server]["server"]

            if mt5.login(login, password, server):

                account_info = mt5.account_info()
                balance = account_info.balance
                equity = account_info.equity
                # time = datetime.now().timestamp()

                # IMPORTANT!: Market watch time to be modified to use this code. It will output time in the format, 03 March, 23:59
                symbol = mt5.symbol_info("GBPUSD")._asdict()
                timestamp = symbol["time"]
                date = datetime.fromtimestamp(timestamp)
                hour_ago = date - timedelta(hours=1)
                time = hour_ago.strftime("%d %B, %H:%M")

                print(json.dumps(
                    {"balance": balance, "equity": equity, "time": time}))
                mt5.shutdown()
            # else:
            #     print(json.dumps(f"Login failed: {mt5.last_error()}"))
            #     exit(1)

        mt5.shutdown()
        # time.sleep(10)

    except Exception as e:
        print(e)
        exit(1)
