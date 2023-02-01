import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'

export var mock = new AxiosMockAdapter(axios)