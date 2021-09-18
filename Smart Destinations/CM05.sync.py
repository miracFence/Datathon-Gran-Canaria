# ---
# jupyter:
#   jupytext:
#     text_representation:
#       extension: .py
#       format_name: percent
#       format_version: '1.3'
#       jupytext_version: 1.11.5
#   kernelspec:
#     display_name: Python 3 (ipykernel)
#     language: python
#     name: python3
# ---

# %%
import pandas as pd
import matplotlib.pyplot as plt
import glob
datosClimaDiarios = "../../datos/CM05/datosClimaDiarios_.csv"
datosClimaDiarios_dt = pd.read_csv(datosClimaDiarios)
#datosClimaDiarios_dt.dropna()
datosClimaDiarios_dt.plot(x='valor',y='latitud')
datosClimaDiarios_dt.head()
maestro_cm05_20150101_20151231 = "../../datos/CM05/maestro_cm05_20150101_20151231.csv"
maestro_cm05_20150101_20151231_dt = pd.read_csv(maestro_cm05_20150101_20151231)
maestro_cm05_20150101_20151231_dt.head()
maestro_cm05_20150101_20151231_dt.plot(x='valor',y='latitud')

# %%

maestro_cm05_20160101_20161231 = "../../datos/CM05/maestro_cm05_20160101_20161231.csv"
maestro_cm05_20160101_20161231_dt = pd.read_csv(maestro_cm05_20160101_20161231)
maestro_cm05_20160101_20161231_dt .head()

maestro_cm05_20170101_20171231 = "../../datos/CM05/maestro_cm05_20170101_20171231.csv"
maestro_cm05_20170101_20171231_dt = pd.read_csv(maestro_cm05_20170101_20171231)

maestro_cm05_20180101_20181231 = "../../datos/CM05/maestro_cm05_20180101_20181231.csv"
maestro_cm05_20180101_20181231_dt = pd.read_csv(maestro_cm05_20180101_20181231)

maestro_cm05_20190101_20191231 = "../../datos/CM05/maestro_cm05_20190101_20191231.csv"
maestro_cm05_20190101_20191231_dt = pd.read_csv(maestro_cm05_20190101_20191231)
maestro_cm05_20200101_20201231 = "../../datos/CM05/maestro_cm05_20200101_20201231.csv"
maestro_cm05_20200101_20201231_dt = pd.read_csv(maestro_cm05_20200101_20201231)
maestro_cm05_20210101_20210131 = "../../datos/CM05/maestro_cm05_20210101_20210131.csv"
maestro_cm05_20210101_20210131_dt = pd.read_csv(maestro_cm05_20210101_20210131)
maestro_cm05_20210201_20210228 = "../../datos/CM05/maestro_cm05_20210201_20210228.csv"
maestro_cm05_20210201_20210228_dt = pd.read_csv(maestro_cm05_20210201_20210228)
maestro_cm05_20210301_20210331 = "../../datos/CM05/maestro_cm05_20210301_20210331.csv"
maestro_cm05_20210301_20210331_dt = pd.read_csv(maestro_cm05_20210301_20210331)
maestro_cm05_20210401_20210430 = "../../datos/CM05/maestro_cm05_20210401_20210430.csv"
maestro_cm05_20210401_20210430_dt = pd.read_csv(maestro_cm05_20210401_20210430)
maestro_cm05_20210501_20210531 = "../../datos/CM05/maestro_cm05_20210501_20210531.csv"
maestro_cm05_20210501_20210531_dt = pd.read_csv(maestro_cm05_20210501_20210531)
maestro_cm05_20210601_20210630 = "../../datos/CM05/maestro_cm05_20210601_20210630.csv"
maestro_cm05_20210601_20210630_dt = pd.read_csv(maestro_cm05_20210601_20210630)

maestro_cm05_20210701_20210731 = "../../datos/CM05/maestro_cm05_20210701_20210731.csv"
maestro_cm05_20210701_20210731_dt = pd.read_csv(maestro_cm05_20210701_20210731)

# %%
listAllAmountFiles = glob.glob('../../datos/CM05/maestro_cm05_*.csv')
combined_amount_dt = pd.concat([pd.read_csv(f) for f in listAllAmountFiles ])
print(combined_amount_dt.describe())

# %%
combined_amount_dt.head()
