import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import axios from 'axios';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const ServiceCentres = () => {
    const [cities, setCities] = useState<
        {
            id: string;
            title: string;
            city: string;
            address: string;
            phones: string[];
            geo: [number, number];
        }[]
    >([]);
    useEffect(() => {
        axios({
            method: 'GET',
            url: '/serviceCentresDataSet.json',
        }).then((el) => {
            setCities(el.data);
        });
    }, []);

    const options = cities
        ? [...new Set(cities.map((el) => el.city))].map((el) => ({
              value: el,
              label: el,
          }))
        : [];
    const optionAll = { value: 'all', label: 'Все города' };
    options.unshift(optionAll);
    const [value, setValue] = useState(optionAll);
    const handleChange = (selectedOption: any) => {
        setValue(selectedOption);
    };

    return (
        <>
            <Select
                value={value}
                onChange={handleChange}
                options={options}
                className={'serviceCentres__select'}
                classNamePrefix="select"
                isMulti={false}
                isSearchable={false}
            />
            <div className="serviceCentres__centers">
                <div className="serviceCentres__centers-list">
                    {cities
                        .filter((el) =>
                            value.value === 'all'
                                ? true
                                : el.city === value.value,
                        )
                        .map((el, idx) => {
                            return (
                                <div className="item" key={idx}>
                                    <div className="top">
                                        <div className="title">{el.title}</div>
                                        <div className="type">
                                            <svg
                                                width="24"
                                                height="33"
                                                viewBox="0 0 24 33"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M23 12C23 21.5 12 31 12 31C12 31 1 21 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z"
                                                    fill="white"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12 2C6.47715 2 2 6.47715 2 12C2 16.1495 4.56628 20.6714 7.29669 24.2706C8.64288 26.0451 9.99137 27.5471 11.0039 28.6057C11.4003 29.0201 11.7443 29.3656 12.0154 29.632C12.2833 29.3796 12.621 29.0537 13.009 28.6628C14.0192 27.6449 15.3649 26.1919 16.7084 24.4514C19.4275 20.929 22 16.4039 22 12C22 6.47715 17.5228 2 12 2ZM12 31L12.6536 31.7568L11.983 32.336L11.3273 31.7399L12 31ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 17.0961 21.0725 22.071 18.2916 25.6736C16.8851 27.4956 15.4808 29.0114 14.4285 30.0716C13.9018 30.6023 13.4618 31.0204 13.1518 31.3072C12.9968 31.4507 12.8742 31.5614 12.7894 31.6371C12.747 31.6749 12.714 31.704 12.6912 31.7241L12.6645 31.7473L12.6571 31.7538L12.6549 31.7558C12.6546 31.756 12.6536 31.7568 12 31C11.3273 31.7399 11.3276 31.7402 11.3273 31.7399L11.324 31.7369L11.3167 31.7303L11.2905 31.7061C11.2679 31.6853 11.2351 31.6549 11.193 31.6154C11.1086 31.5365 10.9865 31.4209 10.832 31.2714C10.523 30.9725 10.0842 30.5375 9.55861 29.9881C8.50863 28.8904 7.10712 27.3299 5.70331 25.4794C2.93372 21.8286 0 16.8505 0 12Z"
                                                    fill="#333333"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z"
                                                    fill="#EC1C24"
                                                />
                                            </svg>
                                            <p>Магазин</p>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <p>
                                            <span>Город:</span>
                                            <span>{el.city}</span>
                                        </p>
                                        <p>
                                            <span>Адрес:</span>
                                            <span>{el.address}</span>
                                        </p>
                                        <p>
                                            <span>Телефон:</span>
                                            <span>{el.phones.join()}</span>
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                </div>
                <div className="serviceCentres__centers-map">
                    <YMaps query={{ apikey: '' }}>
                        <Map
                            defaultState={{
                                zoom: 4,
                                center: [56.661532, 51.076841],
                            }}
                            width="100%"
                            height="100%"
                            options={{
                                yandexMapDisablePoiInteractivity: true,
                            }}
                            modules={['route', 'Placemark']}
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                        >
                            {cities
                                .filter((el) =>
                                    value.value === 'all'
                                        ? true
                                        : el.city === value.value,
                                )
                                .map((el) => (
                                    <Placemark
                                        key={el.id}
                                        geometry={[el.geo[0], el.geo[1]]}
                                        options={{
                                            iconLayout: 'default#image',
                                            iconImageHref: `data:image/svg+xml;utf8,
                                          <svg width='24' height='33' viewBox='0 0 24 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                              <path fill-rule='evenodd' clip-rule='evenodd' d='M12 31C12 31 23 21.5 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 21 12 31 12 31ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z' fill='%23F6DADC'/>
                                              <path fill-rule='evenodd' clip-rule='evenodd' d='M12 2C6.47715 2 2 6.47715 2 12C2 16.1495 4.56628 20.6714 7.29669 24.2706C8.64288 26.0451 9.99137 27.5471 11.0039 28.6057C11.4003 29.0201 11.7443 29.3656 12.0154 29.632C12.2833 29.3796 12.621 29.0537 13.009 28.6628C14.0192 27.6449 15.3649 26.1919 16.7084 24.4514C19.4275 20.929 22 16.4039 22 12C22 6.47715 17.5228 2 12 2ZM12 31L12.6536 31.7568L11.983 32.336L11.3273 31.7399L12 31ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 17.0961 21.0725 22.071 18.2916 25.6736C16.8851 27.4956 15.4808 29.0114 14.4285 30.0716C13.9018 30.6023 13.4618 31.0204 13.1518 31.3072C12.9968 31.4507 12.8742 31.5614 12.7894 31.6371C12.747 31.6749 12.714 31.704 12.6912 31.7241L12.6645 31.7473L12.6571 31.7538L12.6549 31.7558C12.6546 31.756 12.6536 31.7568 12 31C11.3273 31.7399 11.3276 31.7402 11.3273 31.7399L11.324 31.7369L11.3167 31.7303L11.2905 31.7061C11.2679 31.6853 11.2351 31.6549 11.193 31.6154C11.1086 31.5365 10.9865 31.4209 10.832 31.2714C10.523 30.9725 10.0842 30.5375 9.55861 29.9881C8.50863 28.8904 7.10712 27.3299 5.70331 25.4794C2.93372 21.8286 0 16.8505 0 12Z' fill='%23EC1C24'/>
                                              <path fill-rule='evenodd' clip-rule='evenodd' d='M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z' fill='%23EC1C24'/>
                                          </svg>
                                          `,
                                            iconImageSize: [24, 33],
                                            iconImageOffset: [-12, -16],
                                        }}
                                    />
                                ))}
                        </Map>
                    </YMaps>
                </div>
            </div>
        </>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <ServiceCentres />
    </React.StrictMode>,
    document.getElementById('serviceCentresMap'),
);
