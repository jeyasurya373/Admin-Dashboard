import "./widgetsm.css";

import { Visibility } from '@material-ui/icons';

function Widgetsm() {
    return (
        <div className="wigetsm">
            <span className="widgetsmtitle">New Join Members</span>
            <ul className="widgetsmlist">
                <li className="widetsmlistiteam">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTK500IQ_2NpiNk7Ed_4phbWDtLSZ7QGWuNA&usqp=CAU" alt="" className="widgetsmimg" />
                    <div className="widgetsmuser">
                        <span className="widgetsmusername">Jeya surya</span>
                        <span className="widgetsmusertitle">Full Stack Devloper </span>
                    </div>
                    <button className="widgetsmbtn">
                        <Visibility className="widgetsmicon" />
                        Display

                    </button>
                </li>
                <li className="widetsmlistiteam">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRgaGhoaGhoaGhwaGhoZHBwZHBwcHhohIS4lHB4rIRwYJjgnKy8xNTU1HCQ7QDs0Py40NTEBDAwMBgYGEAYGEDEdFh0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAM8A9AMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAIFAAEGBwj/xAA8EAABAwIFAQUHAwMCBgMAAAABAAIRAyEEEjFBUWEFInGBkQYTMqGxwfBC0eEHFFJighUzcqKy8RYjJP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDgPyEVrZui02a/h/hHZR6HqgjTbbTzumhSBa2JOpcI0MwPH+VumzdN+7tY9bgAzF78IAso3gjnXn8simjB41hNYaiDrqdByV0fZ3ss98OrEsH+I+M+M2b5yeiDlqVAlwAEkzFpO/mTor7Aeytd474FMcvufEMFwfEhdpgsBTpCGMDZ1Orj4u1KZL0HO4b2PotjO9742sxvoL/NWmH7EwzPhpM/3DOf+6U0XytinugnTosHwtaPAAfREAUGFSLuqCLmNOoB8QClK/ZtB/xUqZnfKAfUXTJcDYFY2OQgocV7MYZ05WuYeWuJjyMhUuO9jHa06jXa2cC09ACCQfNdw+kDvdLvpuG0oPK8T2VUpyKrH09RmyyDY2zTlIvrNlXtptyum5gATrpIg37oPhK9gc4EZXAEHUOEg+RXP9s+yTKnfo9x/wDif+Wfu36dAg8xxBdmBLiTAAdJsAABfoLJV1Aze3jtpt5iyv8AH4F9J2So1zObC4tJGzhbnzVbiKAH+VxI8Z38vsgrMkQTBvpPHMaStToIFt9z4plstOgvGonqNQhBkuvAk72Ak/IIICJbYm9wLTfQHYqD6moGhMxrzF/NG965vwmDBBIsSJnX0Q205a4gaRuNPDU7aIB1KZbZwIkSJEW5T1VrGsbkdLiwFxAMtdJBZ0EXlJ5Ji8zaNwoERZAVge3K4aXINtrFDa+DK255MToBCgUEzAGl+Vj6zi0NJMDQcIYU2AboIrFN7YMSsQdCymePNNNo2k7jmfz/ANo1KmmW0EAaNGfJW3ZvZz6jw1jQTvNg0cuPr+yL2R2U6s+G2aPidsB9zwF3mCwbKbMjGwNzu48k7lAj2V2NToXAzP3eRpyGj9I+atQFmVY42QRf6JZ7wECrV5KC96AznqBqnlCzdVB70DLMQQbo7K4O6rHPUDUjdBYvf+aIAxBGiTdU6oJqoLYY4RpdFp4wkTFvFUHvijMxLgI0ugvP7ppUm1AdCqunXlth4pZ1S9j5oLfHYSnVbke0ObwdQeQdWlef+0ns/VonO0ufSmQ46sJj4+pgd7Q9F11PEGdU/TqgiDBBsQbgjhB4/j2yYN8tgGkkRvBJJ4+aTq0SwXAOYAgzMDWLGx6Hhd97U+zYaPe0W9wSXtEnLJnMP9P08NOTeCGlrfhd8VpmDbw29EFVi8LlcQ05gNSAYkAF3kClabW5hnnLN8sZo6TZP4inGsabHyvwbaJZrJJDobILgT3QLSLAGx28UA6NQgEWIuYcJuRlkf6oQotEXnX7IjogWgj0I5PX+FsVCG5BEEg6CZExB13QLuC1nsRHmmC4ERZttbmSJ9JS7mEeaDQFpR8K5gd3wS3pyh1QLQCDF55TFL3fu3STnm3EIBipwLLFpYg76nRB9dTwn8BgHVHhjBrqToBaSVBlPQC5Pqei7fsjs8UWXAzuguPXYeA+soD4PCspMDGCAPUncnqi+9QnuUGvi6A7nqLqnosY8FaqARcwgrqpCVqVArTE0JFgR+bqnqUz0njlBI1Fjnys9yN5JjRuhJ6pnBVYJa1omLmfQalApXZlaXE32H7/AJskX4mbmBpporbtKi8gQJt3jaPIErna4c0x+dEDX90I6oXvgo0ZAnb8KCLkiJ8NUDLXJh1J5EhpiAf/AEkaLjfra66DsStLC03iw6fwgBhcI8CXab3M82SlVuRxHUweVfvJi+n56IFakSLAX5EjxQUzHpzD1dkKpg3ZiB8tATyUNjS03/g+HKDoMOJaDryuM9puwfdzUYIpk3A/QTo0/wCmdDtMLpsNiCPNOPa17S1wlrhBHIKDyOtQBi2hv1Hh+apJ7GseXBgc3Zr+vMELqO2+zDSeWbatdy06eeyoa2GPiSYA39EFI9nqjOxEPa+mMhaGgby4CC683N7I1bDuklxuNZPoh1aLiLgy3KBpEGY8TJQJnefwoeU2PonCzISHsk3EE6GNbbhLEHQ+hQExNFwDXucDnBIg3EWuNkOk1p1MJmjgnOFiPhLgJkkDaBul2tJ0CA1N7AILZPK0hALEHtHszgczjUcLMMN6u/gX8SF0NV6jhqApU2sGwv1J1PqhOKDHlAc8qbnIcSUB2kjRbFPMRKlnAi4hQw+JDnEDx8kDWIZZU9doBk24n62sFZ4l4i8qjruJkzogNhKlNs5jJ23JQw9ofAGUbkTeVT4gvPwk+Wysez6LwJeb8nZBfGhIbciOvKrMZgWk3An0PyQfavFVaGBqvpuAeAAHOmQHODSW/wCsTbqvCXiTJuSZJNySbkk7lB7PU7OeBA8tp8OUBmCeHGNdZEn68oH9Ne0qleg9lRxf7pzWsc67srhIBO8EG/BC7XD4ZoAA3Qc3/wALeRJF7afW3mFLBtLHkzFr9QumxDO7A12VK/DkOO5KB2jUDgCPNNZ7XhVjGOb4EwpYphEkumOEFgAx0ggXHqknYZoJJkxYgyRHRJUqhBB4VoX52EtI8/oghXpsy6XtEb/mihQJIHTRbq1MwAJDTHosweZri0/nBQA7cwPvaJgS9veZzbVvmPmAuAqUQQNjOvTleqNbB+a4nt7A5KjgND3h4EmR5GUHK1KQOYSCAbTYmdx1VdiaBHquidhwCARobkcJHEYdzjJ1+ISPi+V0FG8tcWhrSOQDJcZN76GIHkl6pc85idwCT9SnsUzNLv1EmQBACSawkhvJi5gSgxj3MdLHQRIzN3C1QcQbSbGY4UvdXIJAieoJGwU8HUe14yfEe76oAwsTmLAa4tyERYiZv4rEHvGIfdLOKNUNyglBA6LHPGWN1p2tlFzUAnMJR+z2QC62kfRaaL+SjVP6W23O0oMx+LDR3jbdKUqXvIg21/lJ9oUi8Xmdj+eatuyGBrQBr11QS/4W0RAi+qbGFGpRHXBHzSWP7Yo0GzVqtYJgZtSd4Au7yCBH29YT2fiBH6WHyD2E/IFeEvC9W7d/qLRLH06VI1Q5paXVO4wggg934j5wvLXsQet/0p7PfTwrnvECrUzs5LA1rQfMh0fyu3bquF9jPbDC+5pYZ7vdPpsZTl8Bjy0ASHzAk7OjzXc2gfLwQEeAUuKAB6o4FlAm+iCD6QOwVfjqR8lbOIUKjAQg5mqyOY9VLs9j5OXSLj7q3qYSGmB+StYNsCTrpOkhABgzAjcfhunBR0jhDpmHO7tjF/FONA0QQYwqn9o8MHMD4uw36g2+sK9AKXxNIOY5sagj1QeeVWxfeTtaPzZKZyx0gydAbkD+NVY1GSYhL1aUk2/hBQYpnxS0STMi2WOEhXo5TleI0Ol7iRbqugxbDky2+KYi86aqoxtJ03BJt12sECJeC1rCGtDZ7wHeM88pduqZbQLjlGvWyHFkBLbyTysTVLCtLQZfpeGkgHiViD2woZhGQwyUAwNFFovPKKGTZSo0+UG2MGnRCrUzGvn0Tbmpas+NkFPi35SD9dOPVRwmLOs9Z6JjH0g8ETEcbqvweDLIBJdE9PUD0QWJxxeCWk21G3ivKvbPtF1XEuBPdp9xo8IzHxLp9AvWqdBrGGoe6A0l19gJK8IxFYve551c4uP+4k/dBgK05aatlAOV6V/SbtV2arhnOJaGipTBMhoByvA4HeYY6HlebFdL/TzE5MfS4eH0z/uYSP8Aua1B7bn0HKg8omWLoDgJ6n7ICP8Aqsbpa62fsl2a6xz4oGosUNrNUXNZDc7X5IBGnJOmn0WnuiJ4spNcRB9fz0RMoQEGgQ6hknottfcjgIT6koOQ7QoZXvA/yPkDdJPp21V32tTHvHHkA/JVT28oKvF0ZBMKpqs1tPHiuhe0KuxFHU20m+6CkdQLpMDmBolqzBsIsN5Vq6nJNo6IL8OCDJiBvuRsgRp1XAQJhYmadaBGVvmLrEHtLgtNsiPQnBARjN0VpKHTdFkVzkE3xCqcS4kWseTH3T9S/wBks+mePJBWNIAnUrABMi3zTtTC+X5soMYBqPGevCAHbj8uDrvPwto1DAOvcP7rwprZ08fQSV7b7UYoHBYhgaT/APWZA1y2zwecuZeT+z8EYoEA/wD5KxbaYc0sdIOxyhw80FUFNRCkgiWpvsavkxFB8xkq03E9A9s/KUo5Tw8Z2yYGZsngSJKD6JfUvC22eFCrBufzhEoi3TZBuo2RZDa2/l6o7wgN+aAr2xEbKJv+fl1N7bITt/VAMTJCIDFljBaSiNiEGD56IAF0yNEuNygpO2B3/L91WFhOnVWnafx+Q+6Qegr6rEliWWVtUYq7Es2QVTmXS9VlirCowwHECNLanyUhSL5IEwLxaw3QVFV7TljKO6JEHXeeqxMtwDnXDCRysQevPddRIBC0VgKAb2RC2Ln6pnKl3C6Ambbf6IRfqCb8qER4Ibx19UERXMwUw5kiI1SdN0G49dkf30a/vZAnjcOQBEk+vqvJ6GDdTx7qAI7+emYblblexxygHQCQLHZeznEgwvOv6pU2NfhqzDleczc0gHuQ5h5sS71Qeft0vqthSrVZcTuSSY0k3P1Qi9BOFB+h8CsBUss21m0coPonDsBpstEtaY1iw+aNTBH5qk/ZwP8A7Wh7wEP92zODq12UWM3tp5Kyi3KAdRyjCI/5rQZugi4zYLTWKQF1qoY8EEar9ltrZC1Uct3QbebIJ0RSotbHkgosd8bj4D0CScE68SSeTPqgPZqUClQSl61ONJ0ThahVGyTCCqrNMATa9uEJrIaYJB08t7qyxDgRGUaR89fFK+7sgrACLSfUrFYe6WIPRXBQKK+9xohkICh6E+91GVpzkEC36rRabiyksaL8oF8RTjTTZAlWdaHDjhIilJGszCCNJl523QsfhmvY9rmhzHAktIDmmBweqsauHtLdd0sd+IM/dB8+tW1j4m2m3grb2WwQrYqkxwluYvcOjAXX6EgDzQVQTnZOKNKvSqAxkqMcT0DgXfKR5qy9s+yP7fEnKIZUmozgGe+0eBM+DgqIiQg+l440WFK9j18+Hov/AMqdN3qwFNoIlayqZC1ugG5saKD3c7BFcJUQ2EAg0qYWwFpBhF0PGuysPW3rr8kdgSOPfLgOPqfwIK8s4QHtTLghPCBVzUF55TbhKA9iBN7FrLeY8lrtLFspML3mBsNydgOq5L/5ZVJMMpgbWJI85QdUaaxcnU9rKs/Cz5/usQev4B8tynUaeH8fsjuCo6valOi4Znd7/EXdG8ja3KqsZ7W1HlopMawZiCXnM6wmIiBaCdd0HXEKBXH4v2irS7vAAARlA7xhwJ6Xg8ABF7J7TAGSqSXvJIJN7cnmEHSvxDR14j90s7HwRmEAmJnSeirG45jrB0Cf1SNDxtoU29hi5nS6CzJ4US48JSlXIBBsdiR3R0RmYuAcw8wLFA9TcCN/sh1Gwx9pOV30KnSqNc0EOFxIv9lj51QfNzNB4Bd//S7ABzq1YicobTaeM0ud9GfNcNiYzugQMzoHFyvW/wCmtEMwLXDV9So8nSIOQDrZgug3/UfswPwRqAS6k5rwdO6SGunpBn/aF5G1fQZfIINwZBBggjcEG0LwTtFoFeqAAAKlQANGVoAe4AAbDog9z9hq2fAYY27tMMsZ+CWX62FlfFee/wBNKuTBvyamq8v5DsrAI57gafVdbT7QcLGCdj+6CzWKrr9olglxA8rk8Ryql/brzoddDvHhp9UHUOIFyQOSTASFXtSk22efC/z0XM4nGudJcCeXG5joLgKrdUJ/UBOljpzCDsH9v0hpmJ8I+ZQMN7RAkl7Q1k2IOg2mdfRcyXAd46zETa3XfZAfWDi7K6I1FiL8IPRKfaFNzM7XtLTpeLnaDeZSHvWknvNJ6EErzDFViCQ0kb2BJzfZVLu06gd3rxGsgoPY3MS9d7WXe5rf+ogfVeTHtiq0yyq9tos4jyiVXYis55LnuLjuXEk+pQd7257XtpvyUQ2pHxuk5dfhEanroOqUx/toCwe6YQ8i+f4W+EHvfJcQCsJQN43GPquzveXO+Q8BshBQZdSDUGlinCxB0eBqBua8kiZ1HBN/K6jRqFsFzjB0PEzMj80CTZWygEnQEH0Gn5soAOeCeunEX/P5QWbKxLszj02ME6E9MsmArp+GYBmY5weCCHSefvJHyXP4bC2Jzgwbg/5ddel4VphZabDMwwSBcZTAJB5H0HKC1Ywv77RBiCJkEC58ZtCnie0X0yx36S7vNJJkEBsNm4m7lgqBgzB0AyQIMRzpzFvshYp+eHMN+45uYd0wTIHlPlKC/wANi2Ps0z0NnD9/ojPZqIP76WC5gtyOa5sgZgAAdOAPV3z2Vo7HHvPkkZTaBEid7Hp4oH2VAA12WJMEbg8eN1H++kzBy6C5uARcbDU+iTwvaBewzAIdAgnWRHjcwie6aANBawJgGLx9UHjXaDMtWo3/ABe8ejiF617GYof2VCHCGtIJ4dmdI8tF5j7TR/dVo0zj/wAWz5zK7D2AYTQvdoqOyj/UQNfzdB31Ou3XXz0XivtLhvd4uu3Y1HPHg85x/wCS9SxD2tMOseJ06WXlntLQLMTU72bMc4JmYdePLTwAQdv7BVWswpl0GpUe4WmzQxu3UK7xHapBhgkHdwtFrxIPrC4n2fJZRE3c/vNjQAxrvtMAbq3bUaAGnMdQbcXudJ6X0QNUaznvu7Odi4kMG0NAvl1TeLcxrZPdIvAi8X+IG8IFKoyC2IA3Nx5kG8+arsfiGZHZX3d3JyyNDAjQDXTog2cQ57g2+k368218UV9Vh1JMCIb3TEDcGfOVT1O02sJb8R3dqTbSFV1cfImXbyA65H6QTpAvPMoLfH1iJLyTaW6R526aJCk8kzof+oD89VWHEOuTugGseSgfxXaDiYgH1KTr4p7gA+4GlhZDc+2iE5yDCVJrhF9UKVsFBKFuFCVNoQTapNcoAKTSgKsUViAmYnvG8X8t03gbZrG8W1E2+/1SLH7bbpwVgAB43FjcW+aCbSQ9wGxcD1Y4/UEiE5gcTkhk3aSARoRcg8Tb7KsyOJDt5AcR8j4pxjBm4Gu1riR8j6lB0eC7RFQZHCDsY+IERbpaI0+zODqFhyaty5mmdyZiOq57C3A2LQ0Tf4JBt4kfPyVtSrTeSS3rqDt5T80DtegHCAY7zTrYFt7cWA04HVQ7MxfcfmdETM7NMnXxn1S9bHNYBmPJAGpHgqWviS9xjuskkj81P7oLKnjnFoYyNZJ3N5Gulz9EWliDMTmO7rmwGg4VSzFZW2GmnJJ672WMxZAAItNyLEkyY/NkFX7S4QBwqtsHkgjUBwH3g+iufY3HBlB7AQHmoTyTLQJjy4VZ7RvzMZPMxbcGLbfyqTD4lzDLCRPHnvruUHolXFsY15LhDZJcdSRtfUrgu1caary8km0SbT1jb+ErXrOeZc4k9dvAbKIKDrew8a1zLmHC3DRbUDVWr6rQRLZAuRENBImDybC689AVlg+0MsB8uaNNDA8Dqg6CpinTDbknjncBBxUOpiTBDut9h53NlXHtIOcC0kG0E2I6SoYvtHNAgW1IEZjp+QgFXcBaDmJOu2nzS7jrPgpscHGTM6ADwsl3HogmXn8lad4qOZRJQFa6yE4KTCtOQRhSUSsQSWwowptKCQKlCgSpAoCArEOViAtEBHotBj57c6dYhKsuUXNwgsmMbyY58hfxlHYxrRne5oaDqf1AiIHrp0VMzGtG8+RQ8Z2hmbkaO716GbegQW1DtakMz3FzjIhoHxCIsToLfNL1faN5blY1rZ1cbnpA0H8KgLltqBqvjXvJLnkkoIeeSorAgJTrubYG3yHgFOpi3uEF3XhAWBBpSCiQthBhWlOFFBgU1BSaUGlgK2VEoCFy0HLAooNkrYKwBaBQSaVJ5UFtBpbC0FsINhTYFFq2Cgk4LUqRUEE1iyViD//Z" alt="" className="widgetsmimg" />
                    <div className="widgetsmuser">
                        <span className="widgetsmusername">Francies</span>
                        <span className="widgetsmusertitle">App Devloper </span>
                    </div>
                    <button className="widgetsmbtn">
                        <Visibility className="widgetsmicon" />
                        Display

                    </button>
                </li>
                <li className="widetsmlistiteam">
                    <img src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetsmimg" />
                    <div className="widgetsmuser">
                        <span className="widgetsmusername">Jai surya</span>
                        <span className="widgetsmusertitle">Design Engineer</span>
                    </div>
                    <button className="widgetsmbtn">
                        <Visibility className="widgetsmicon" />
                        Display

                    </button>
                </li>
                <li className="widetsmlistiteam">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTK500IQ_2NpiNk7Ed_4phbWDtLSZ7QGWuNA&usqp=CAU" alt="" className="widgetsmimg" />
                    <div className="widgetsmuser">
                        <span className="widgetsmusername">Mandela</span>
                        <span className="widgetsmusertitle">Software Engineer </span>
                    </div>
                    <button className="widgetsmbtn">
                        <Visibility className="widgetsmicon" />
                        Display

                    </button>
                </li>
                <li className="widetsmlistiteam">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYFV-bwRLTx5vbXeIRyRZDH86KNG-4ktGcg&usqp=CAU" alt="" className="widgetsmimg" />
                    <div className="widgetsmuser">
                        <span className="widgetsmusername">Rose</span>
                        <span className="widgetsmusertitle">Andriod Devloper </span>
                    </div>
                    <button className="widgetsmbtn">
                        <Visibility className="widgetsmicon" />
                        Display

                    </button>
                </li>
                <li className="widetsmlistiteam">
                    <img src="https://menglish.sakshi.com/sites/default/files/article_images/2021/07/23/Vembuli.png" alt="" className="widgetsmimg" />
                    <div className="widgetsmuser">
                        <span className="widgetsmusername">Vempuli</span>
                        <span className="widgetsmusertitle"> Boxer </span>
                    </div>
                    <button className="widgetsmbtn">
                        <Visibility className="widgetsmicon" />
                        Display

                    </button>
                </li>
                <li className="widetsmlistiteam">
                    <img src="https://www.thenewsminute.com/sites/default/files/styles/slideshow_image_size/public/Sarpatta_Facebook_210721_1200x800.jpg?itok=qjdOYOKN" alt="" className="widgetsmimg" />
                    <div className="widgetsmuser">
                        <span className="widgetsmusername">Kabilan</span>
                        <span className="widgetsmusertitle">Creator </span>
                    </div>
                    <button className="widgetsmbtn">
                        <Visibility className="widgetsmicon" />
                        Display

                    </button>
                </li>

            </ul>
        </div>
    )
}

export default Widgetsm;