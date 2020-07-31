import Mock from 'mockjs'
import apiData from './data.json'

Mock.mock('/categeroy',{code:200,data:apiData.categeroies})
Mock.mock('/timeline',{code:200,data:apiData.timeline})