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
import os
import pandas as pd
# %%
Competitors_ages = "/home/rockhight/Documents/externalRepos/Datathon-Gran-Canaria/datos/CM01_1/Competitors_ages_2021-03-01.csv"
Competitors_ages_dt = pd.read_csv(Competitors_ages)
Competitors_ages_dt.head()
# %%
hourly_mentions_2021 = "/home/rockhight/Documents/externalRepos/Datathon-Gran-Canaria/datos/CM01_1/hourly_mentions_2021-03-01.csv"
hourly_mentions_2021_dt = pd.read_csv(hourly_mentions_2021)
hourly_mentions_2021_dt.head()
# %%
prices_search_date = "/home/rockhight/Documents/externalRepos/Datathon-Gran-Canaria/datos/CM01_1/Prices_search_date_2021-03-01.csv"
prices_search_date_dt = pd.read_csv(prices_search_date)
prices_search_date_dt.head()
# %%
ages_2021 = "/home/rockhight/Documents/externalRepos/Datathon-Gran-Canaria/datos/CM01_1/ages_2021-03-01.csv"
ages_2021_dt = pd.read_csv(ages_2021)
ages_2021_dt.head()
# %%
Product_TPI = "/home/rockhight/Documents/externalRepos/Datathon-Gran-Canaria/datos/CM01_1/Product_TPI_2021-03-01.csv"
Product_TPI_dt = pd.read_csv(Product_TPI)
Product_TPI_dt.head()
# %%
venues = "/home/rockhight/Documents/externalRepos/Datathon-Gran-Canaria/datos/CM01_1/venues_2021-03-01.csv"
venues_dt = pd.read_csv(venues)
venues_dt.head()
# %%
product_ages = "/home/rockhight/Documents/externalRepos/Datathon-Gran-Canaria/datos/CM01_1/product_ages_2021-03-01.csv"
product_ages_dt = pd.read_csv(product_ages)
product_ages_dt.head()
# %%
Prices_hotel = "/home/rockhight/Documents/externalRepos/Datathon-Gran-Canaria/datos/CM01_1/Prices_hotel_2021-03-01.csv"
Prices_hotel_dt = pd.read_csv(Prices_hotel)
Prices_hotel_dt.head()
# %%
Prices_search_date_grand_canary = "/home/rockhight/Documents/externalRepos/Datathon-Gran-Canaria/datos/CM01_1/Prices_search_date_gran_canary_2021-03-01.csv"
Prices_search_date_grand_canary_dt = pd.read_csv(Prices_search_date_grand_canary)
Prices_search_date_grand_canary_dt.head()
# %%
sentiments = "/home/rockhight/Documents/externalRepos/Datathon-Gran-Canaria/datos/CM01_1/ages_2021-03-01.csv"
sentiments_dt = pd.read_csv(sentiments)
sentiments_dt.head()
# %%
gender = "/home/rockhight/Documents/externalRepos/Datathon-Gran-Canaria/datos/CM01_1/gender_2021-03-01.csv"
gender_dt = pd.read_csv(gender)
gender_dt.head()
# %%
origin_venue = "/home/rockhight/Documents/externalRepos/Datathon-Gran-Canaria/datos/CM01_1/origins_venue_2021-03-01.csv"
origin_venue_dt = pd.read_csv(origin_venue)
origin_venue_dt.head()
# %%
product_gender = "/home/rockhight/Documents/externalRepos/Datathon-Gran-Canaria/datos/CM01_1/product_gender_2021-03-01.csv"
product_gender_dt = pd.read_csv(product_gender)
product_gender_dt.head()
# %%
evol_menciones = "/home/rockhight/Documents/externalRepos/Datathon-Gran-Canaria/datos/CM01_1/evol_menciones_2021-03-01.csv"
evol_menciones_dt = pd.read_csv(evol_menciones)
evol_menciones_dt.head()
# %%
TPI = "/home/rockhight/Documents/externalRepos/Datathon-Gran-Canaria/datos/CM01_1/TPI_2021-03-01.csv"
TPI_dt = pd.read_csv(TPI)
TPI_dt.head()
# %%
HSI = "/home/rockhight/Documents/externalRepos/Datathon-Gran-Canaria/datos/CM01_1/HSI_2021-03-01.csv"
HSI_dt = pd.read_csv(HSI)
HSI_dt.head()
# %%
mentions = "/home/rockhight/Documents/externalRepos/Datathon-Gran-Canaria/datos/CM01_1/mentions_2021-03-01.csv"
mentions_dt = pd.read_csv(mentions)
mentions_dt.head()
# %%
PCI = "/home/rockhight/Documents/externalRepos/Datathon-Gran-Canaria/datos/CM01_1/PCI_2021-03-01.csv"
PCI_dt = pd.read_csv(PCI)
PCI_dt.head()
# %%
PSI = "/home/rockhight/Documents/externalRepos/Datathon-Gran-Canaria/datos/CM01_1/PSI_2021-03-01.csv"
PSI_dt = pd.read_csv(PSI)
PSI_dt.head()
# %%
GTPI = "/home/rockhight/Documents/externalRepos/Datathon-Gran-Canaria/datos/CM01_1/GTPI_2021-03-01.csv"
GTPI_dt = pd.read_csv(GTPI)
GTPI_dt.head()

