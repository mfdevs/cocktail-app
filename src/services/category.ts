import axios, {AxiosResponse} from 'axios';
import {urls} from '../config';
import {HttpCategory} from '../interfaces/Category';

const {list} = urls.category;

export const getList = async (): Promise<AxiosResponse<HttpCategory, any>> =>
  axios.get(list);
