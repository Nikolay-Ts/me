---
title: PyFi
badge: Quantitative finance
tags: C++20, pybind11, Python, CMake
note: Built together with Bilal Waraich.
repo: https://github.com/Nikolay-Ts/pyfi
---

A high-performance Python library for pricing financial instruments, with a C++20
core exposed to Python through pybind11.

It covers bond pricing — present value, yield-to-maturity, clean and dirty prices,
accrued interest and forward values — and options pricing, with Black-Scholes for
European options and binomial trees with early exercise for American ones. On top
of that sit the Greeks (delta, gamma, theta, vega and rho) for risk management,
and stochastic simulation using standard Brownian motion and Geometric Brownian
Motion for Monte Carlo methods.
