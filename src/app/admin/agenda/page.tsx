"use client"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { Draggable, DropArg } from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import { FormEvent, Fragment, useContext, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import { EventInput, EventSourceInput } from '@fullcalendar/core/index.js'
import { collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp, Timestamp } from 'firebase/firestore';
import { db } from '../../../../firebase'
import { NewsContext } from '../../../../context/NewsContext'
import Sidebar from '../../../../components/admin/sidebar'
import Topbar from '../../../../components/admin/topbar'


interface Event {
  title: string;
  description: string;
  start: Date | string;
  end: Date | string;
  allDay: boolean;
  id: number;
}
// interface Agenda {
//   id: string;
//   name: string;
//   description: string;
//   startDate: Timestamp;
//   dueDate: Timestamp;
// }

export default function AddAgenda() {
  const [allEvents, setAllEvents] = useState<Event[]>([])
  const [showModal, setShowModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [idToDelete, setIdToDelete] = useState<number | null>(null)
  const [newEvent, setNewEvent] = useState<Event>({
    title: '',
    description:'',
    start: '',
    end: '',
    allDay: false,
    id: 0
  })
  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [startDate, setStartDate] = useState<string>("")
  const [dueDate, setDueDate] = useState<string>("")
  const {agendas} = useContext(NewsContext);

  useEffect(() => {
    let draggableEl = document.getElementById('draggable-el')
    if (draggableEl) {
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: function (eventEl) {
          let title = eventEl.getAttribute("title")
          let id = eventEl.getAttribute("data")
          let start = eventEl.getAttribute("start")
          return { title, id, start }
        }
      })
    }
  }, [])
  useEffect(() => {
    const fetchAgendas = async (): Promise<void> => {
      try {
        const querySnapshot = await getDocs(collection(db, 'agenda'));
        const datas = querySnapshot.docs.map(doc => {
          return {
                id: doc.id,
                data: {
                      name: doc.data().name,
                      description: doc.data().description,
                      startDate: doc.data().startDate,
                      dueDate: doc.data().DueDate,
                }
          }
        });

        const formattedEvents: Event[] = datas.map(agenda => ({
          title: agenda.data.name,
          description: agenda.data.description,
          start: agenda.data.startDate.toDate(),
          end: agenda.data.dueDate.toDate(),
          allDay: true,
          id: 0
        }));

        setAllEvents(formattedEvents);
      } catch (error) {
        console.error('Error fetching agendas:', error);
      }
    };

    fetchAgendas();
  }, []);

  function handleDateClick(arg: { date: Date, allDay: boolean }) {
    setNewEvent({ ...newEvent, start: arg.date, end: arg.date, description: "deskripsi", allDay: arg.allDay, id: new Date().getTime() })
    setShowModal(true)
  }



  function addEvent(data: DropArg) {
    const event = { ...newEvent, start: data.date.toISOString(), end: data.date.toISOString(), title: data.draggedEl.innerText, description: "deskripsi", allDay: data.allDay, id: new Date().getTime() }
    setAllEvents([...allEvents, event])
  }

  function handleDeleteModal(data: { event: { id: string } }) {
  // function handleDeleteModal() {
    setShowDeleteModal(true)
    console.log(Number(data.event.id))
    setIdToDelete(Number(data.event.id))
  }


  async function handleDelete() {
    setAllEvents(allEvents.filter(event => Number(event.id) !== Number(idToDelete)))
    setShowDeleteModal(false)
    setIdToDelete(null)
  }

  function handleCloseModal() {
    setShowModal(false)
    setNewEvent({
      title: '',
      description:'',
      start: '',
      end: '',
      allDay: false,
      id: 0
    })
    setShowDeleteModal(false)
    setIdToDelete(null)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    
    setNewEvent({
      ...newEvent,
      title: e.target.value,
    })
    
  }

   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setAllEvents([...allEvents, newEvent])
    setShowModal(false)
    setNewEvent({
      title: '',
      description:'',
      start: '',
      end: '',
      allDay: false,
      id: 0
    })
    const dateStart = Timestamp.fromDate(new Date(startDate))
    const dateEnd = Timestamp.fromDate(new Date(dueDate))
    await addDoc(collection(db, "agenda"), {
      name: newEvent.title,
      description: description,
      startDate: dateStart,
      DueDate: dateEnd,
    })
    handleCloseModal()
    
  }

  return (
    <>
      <div className='w-screen min-h-screen bg-blue-100 flex text-gray-600'>
      {/* sidebar */}
      <Sidebar />
      <div className="w-full xl:w-[80%] min-h-screen ml-auto flex flex-col">
            {/* topbar */}
            <Topbar />
      <main className="flex mt-[140px] min-h-screen w-full flex-col items-center justify-between">
        <div className="w-[90%] mx-auto mt-6">
          <div className="w-full z-20">
            <FullCalendar
              plugins={[
                dayGridPlugin,
                interactionPlugin,
                timeGridPlugin
              ]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'resourceTimelineWook, dayGridMonth, dayGridWeek'
              }}
              events={allEvents as EventSourceInput}
              nowIndicator={true}
              editable={true}
              droppable={true}
              selectable={true}
              selectMirror={true}
              dateClick={handleDateClick}
              drop={(data) => addEvent(data)}
              eventClick={(data) => handleDeleteModal(data)}
            />
          </div>
          {/* <div id="draggable-el" className="ml-8 w-full border-2 p-2 rounded-md mt-16 lg:h-1/2 bg-violet-50">
            <h1 className="font-bold text-lg text-center">Drag Agenda</h1>
            {agendas.map(agenda => (
              <div
                className="fc-event border-2 p-1 m-2 w-full rounded-md ml-auto text-center bg-white"
                key={agenda.id}
              >
                <span>
                  {agenda.data.name}
                </span>
                  
              </div>
            ))}
          </div> */}
        </div>

        <Transition.Root show={showDeleteModal} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setShowDeleteModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"

            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg
                   bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                  >
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center 
                      justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                            Hapus Agenda
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              Are you sure you want to delete this?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm 
                      font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" onClick={handleDelete}>
                        hapus
                      </button>
                      <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 
                      shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={handleCloseModal}
                      >
                        batal
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        <Transition.Root show={showModal} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setShowModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                          Tambah Agenda
                        </Dialog.Title>
                        <form action="submit" onSubmit={handleSubmit}>
                          <div className="mt-2">
                            <input type="text" name="title" className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                            focus:ring-2 
                            focus:ring-inset focus:ring-violet-600 
                            sm:text-sm sm:leading-6"
                              value={newEvent.title} onChange={(e) => handleChange(e)} placeholder="Title" />
                          </div>
                          <div className="mt-2">
                            <input type="text" name="title" className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                            focus:ring-2 
                            focus:ring-inset focus:ring-violet-600 
                            sm:text-sm sm:leading-6"
                              value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
                          </div>
                          <div className="mt-2 flex flex-col space-y-2 items-start">
                            <span className='text-sm'>Tanggal Mulai : </span>
                            <input type="datetime-local" name="title" className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                            focus:ring-2 
                            focus:ring-inset focus:ring-violet-600 
                            sm:text-sm sm:leading-6"
                              value={startDate} onChange={e => setStartDate(e.target.value)} placeholder="Description" />
                          </div>
                          <div className="mt-2 flex flex-col space-y-2 items-start">
                            <span className='text-sm'>Tanggal selesai : </span>
                            <input type="datetime-local" name="title" className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                            focus:ring-2 
                            focus:ring-inset focus:ring-violet-600 
                            sm:text-sm sm:leading-6"
                              value={dueDate} onChange={e => setDueDate(e.target.value)} placeholder="Description" />
                          </div>
                          <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                            <button
                              type="submit"
                              className="inline-flex w-full justify-center rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 sm:col-start-2 disabled:opacity-25"
                              disabled={newEvent.title === ''}
                              // onClick={addAgendaToFirebase}
                            >
                              tambah
                            </button>
                            <button
                              type="button"
                              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                              onClick={handleCloseModal}

                            >
                              batal
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </main >
      </div>
      </div>
    </>
  )
}