"use client";

import { useEffect, useState } from "react";
import { RiShareForwardLine } from "react-icons/ri";
import { PiChartLineUp } from "react-icons/pi";
import { FiEye } from "react-icons/fi";
import { TfiTag } from "react-icons/tfi";
import { BsInfoLg } from "react-icons/bs";
import SelectorMenu from "@/app/ui/components/menus/SelectorMenu";
import SearchBar from "@/app/ui/components/SearchBar";

import Table from "@/app/ui/components/table/Table";
import FadeInOut from "@/app/ui/components/auth/FadeInOut";
import Link from "next/link";
import { sharedLinks } from "@/app/lib/placeholder-data";
import { SharedLinkType } from "@/app/lib/interfaces";
import { get } from "http";

const THEME = {};

export default function Page() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const timeSensitiveSelection = [
    "all",
    "schedules",
    "expiresSoon",
    "comeSoon",
  ];
  const linkClassSelection = ["all", "link", "category"];
  const viewSelection = ["small", "medium", "large", "details"];

  const linkTypeSelection = [
    "all",
    "article",
    "video",
    "podcast",
    "image",
    "other",
  ];

  const [linkClass, setLinkClass] = useState<string>("all");
  const [linkType, setLinkType] = useState<string>("all");
  const [timeSensitive, setTimeSensitive] = useState<string>("all");
  const [viewSize, setViewSize] = useState<string>("details");

  const [links, setLinks] = useState(sharedLinks);

  const [showSelector, setShowSelector] = useState<string>("");
  const [showFilter, setShowFilter] = useState(false);
  // const [displayStyle, setDisplayStyle] = useState<"grid" | "list">("list");

  const [sharedLinksToDisplay, setSharedLinksToDisplay] =
    useState<SharedLinkType[]>(sharedLinks);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const searchValue = event.target.value;
    const filteredLinks = sharedLinks.filter((sharedLink) =>
      sharedLink.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setLinks(filteredLinks);
  }

  useEffect(() => {
    searchQuery === ""
      ? setSharedLinksToDisplay(sharedLinks)
      : setSharedLinksToDisplay(
          sharedLinks.filter((sharedLink) =>
            sharedLink.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
  }, [searchQuery]);

  const mainWrapperClass =
    "h-full flex flex-col gap-1 panel-light overflow-hidden";

  const feedWrapperClass =
    "relative h-full panel-light flex flex-col grow w-full justify-start overflow-hidden";

  const displayWrapperClass = "flex flex-col overflow-y-auto";

  const nodes = sharedLinks.map((sharedLink) => sharedLink);

  const [selectedLinks, setSelectedLinks] = useState<SharedLinkType[]>([]);

  const [columns, setColumns] = useState(getColumns());

  const toggleColumnDisplay = (columnId: string) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === columnId
          ? { ...column, display: !column.display }
          : column
      )
    );
  };

  const btnConst = "uppercase p-2 text-xs rounded-lg w-24";
  const mainBtnClass = `${btnConst} bg-gray-200 text-gray-800`;
  const selectedBtnClass = `${btnConst} bg-indigo-500 text-white`;

  return (
    <div className={feedWrapperClass}>
      {selectedLinks.length === 0 && (
        <div className="flex w-full items-center uppercase p-4 gap-4 ">
          <div className="left flex gap-2 z-20">
            <Link
              href="/dashboard/linkmanagement/createlink"
              className={mainBtnClass}
            >
              Create a link
            </Link>

            <div className="relative">
              <button
                className={`${
                  showSelector === "viewSize" ? selectedBtnClass : mainBtnClass
                }`}
                onClick={() =>
                  setShowSelector(showSelector === "viewSize" ? "" : "viewSize")
                }
              >
                View
              </button>
              <FadeInOut show={showSelector === "viewSize"} duration={500}>
                <SelectorMenu
                  selection={viewSelection}
                  setSelected={setViewSize}
                  setShow={setShowSelector}
                />
              </FadeInOut>
            </div>

            <div className="relative">
              <button
                className={`${
                  showSelector === "linkClass" ? selectedBtnClass : mainBtnClass
                }`}
                onClick={() =>
                  setShowSelector(
                    showSelector === "linkClass" ? "" : "linkClass"
                  )
                }
              >
                Class
              </button>
              <FadeInOut show={showSelector === "linkClass"} duration={500}>
                <SelectorMenu
                  selection={linkClassSelection}
                  setSelected={setLinkClass}
                  setShow={setShowSelector}
                />
              </FadeInOut>
            </div>

            <div className="relative">
              <button
                className={`${
                  showSelector === "linkType" ? selectedBtnClass : mainBtnClass
                }`}
                onClick={() =>
                  setShowSelector(showSelector === "linkType" ? "" : "linkType")
                }
              >
                types
              </button>
              <FadeInOut show={showSelector === "linkType"} duration={500}>
                <SelectorMenu
                  selection={linkTypeSelection}
                  setSelected={setLinkType}
                  setShow={setShowSelector}
                />
              </FadeInOut>
            </div>

            <div className="relative">
              <button
                className={`${
                  showSelector === "timeSensitive"
                    ? selectedBtnClass
                    : mainBtnClass
                }`}
                onClick={() =>
                  setShowSelector(
                    showSelector === "timeSensitive" ? "" : "timeSensitive"
                  )
                }
              >
                Time
              </button>
              <FadeInOut show={showSelector === "timeSensitive"} duration={500}>
                <SelectorMenu
                  selection={timeSensitiveSelection}
                  setSelected={setTimeSensitive}
                  setShow={setShowSelector}
                />
              </FadeInOut>
            </div>

            {viewSize === "details" && (
              <button
                className={mainBtnClass}
                onClick={() => {
                  setShowFilter(true);
                  setShowSelector("");
                }}
              >
                Columns
              </button>
            )}
          </div>

          <div className="uppercase flex-grow">
            <SearchBar query={searchQuery} setQuery={setSearchQuery} />
          </div>
        </div>
      )}
      {selectedLinks.length !== 0 && (
        <div className="text-xs uppercase flex gap-2 p-4">
          <button>Move to a category</button>
          <button>Share</button>
          <button>Move to trash</button>
        </div>
      )}

      <Table
        sharedLinks={sharedLinksToDisplay}
        columns={columns}
        setSelectedLinks={setSelectedLinks}
        selectedLinks={selectedLinks}
      />
      <FadeInOut show={showFilter} duration={1000}>
        <div className="z-20	 p-5 uppercase  absolute h-full	w-full backdrop-blur-lg bg-white/20  top-0 left-1/2  -translate-x-1/2 flex flex-col gap-2 items-center justify-center gap-2 flex-grow overflow-hidden">
          <div className="flex flex-wrap gap-4 shadow-xl bg-white p-8 w-4/5 mx-auto rounded-2xl">
            {columns.map((column, index) => (
              <div className="text-xs w-32 overflow-hidden flex gap-2 p-1 items-center">
                <input
                  className="rounded w-5 h-5"
                  id={column.id}
                  type="checkbox"
                  value={column.id}
                  checked={column.id === "NAME" ? true : column.display}
                  disabled={column.id === "NAME"}
                  onChange={() => toggleColumnDisplay(column.id)}
                  style={{
                    cursor: column.id === "NAME" ? "not-allowed" : "pointer",
                  }}
                />
                <label className="text-xs" htmlFor={column.id}>
                  {column.title}
                </label>
              </div>
            ))}
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={() => setShowFilter(false)}
          >
            Done
          </button>
        </div>
      </FadeInOut>
    </div>
  );
}

function getColumns() {
  return [
    {
      id: "THUMBNAIL",
      title: "thumbnail",
      icon: "",
      display: true,
      width: 0,
      grow: 1,
    },
    {
      id: "NAME",
      title: "name",
      icon: "",
      display: true,
      width: 0,
      grow: 2,
    },
    {
      id: "OWNER",
      title: "owner",
      icon: "",
      display: true,
      width: 55,
      grow: 0,
    },
    {
      id: "SUGGESTEDBY",
      title: "suggested by",
      icon: "",
      display: true,
      width: 55,
      grow: 0,
    },
    {
      id: "SHARED",
      title: "shared",
      icon: "",
      display: true,
      width: 55,
      grow: 0,
    },
    {
      id: "STATUS",
      title: "status",
      icon: "",
      display: true,
      width: 55,
      grow: 0,
    },
    {
      id: "AUDIENCE",
      title: "audience",
      icon: "",
      display: true,
      width: 55,
      grow: 0,
    },
    {
      id: "TYPE",
      title: "type",
      icon: "",
      display: true,
      width: 60,
      grow: 0,
    },
    {
      id: "PUBLICATIONDATE",
      title: "publication date",
      icon: "",
      display: true,
      width: 60,
      grow: 0,
    },
    {
      id: "EXPIRATIONDATE",
      title: "expiration date",
      icon: "",
      display: true,
      width: 60,
      grow: 0,
    },
    {
      id: "RANK",
      title: "rank",
      icon: <PiChartLineUp />,
      display: true,
      width: 50,
      grow: 0,
    },

    {
      id: "SHAREDCOUNT",
      title: "shared count",
      icon: <RiShareForwardLine />,
      display: true,
      width: 50,
      grow: 0,
    },
    {
      id: "SAVEDCOUNT",
      title: "saved count",
      icon: <TfiTag />,
      display: true,
      width: 50,
      grow: 0,
    },
    {
      id: "QRCODE",
      title: "qr code",
      icon: "",
      display: true,
      width: 50,
      grow: 0,
    },
    {
      id: "SHORTLINK",
      title: "short link",
      icon: "",
      display: true,
      width: 50,
      grow: 0,
    },
  ];
}
